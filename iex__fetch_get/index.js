import { hex__digest, hmac_ } from '@ctx-core/crypto'
import { utc_yyyymmdd_, utc_yyyymmddhhmmss_ } from '@ctx-core/date'
import { import_meta_env_ } from '@ctx-core/env'
import { http_error_ } from '@ctx-core/error'
import { fetch } from '@ctx-core/fetch-undici'
import { queue_ } from '@ctx-core/queue'
import { query_str_ } from '@ctx-core/uri'
/** @typedef {import('@ctx-core/error').HttpError} */
/** @typedef {import('../_types/index.d.ts').iex_fetch__params_T} */
let queue = queue_(1)
/**
 * @param {number}queue_size
 * @private
 */
export function iex__fetch_get__queue_size__set(queue_size) {
	queue = queue_(queue_size)
}
/**
 * @param {string}path
 * @param {iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[unknown, Response]|[HttpError, Response]>}
 * @private
 */
export async function iex__fetch_get(
	path,
	iex_fetch__params = {}
) {
	return queue.add(async ()=>
		_iex_fetch(path, iex_fetch__params))
}
/**
 * @param {string}path
 * @param {iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[unknown, Response]|[HttpError, Response]>}
 * @private
 */
async function _iex_fetch(
	path,
	iex_fetch__params
) {
	const [
		url,
		params
	] = await iex__fetch_get__arg_a_(path, iex_fetch__params)
	const res = await fetch(url, params)
	const text = await res.text()
	if (res.ok) {
		return [JSON.parse(text), res]
	} else {
		if (res.status === 429) {
			return new Promise((resolve, reject)=>{
				console.error('iex__fetch_get: 429:', url)
				setTimeout(()=>
						_iex_fetch(path, iex_fetch__params)
							.then(resolve),
					100)
			})
		} else {
			console.error('iex__fetch_get|error', res.status, 'GET', url, text)
			return [http_error_(text), res]
		}
	}
}
/**
 * @param {string}path
 * @param {iex_fetch__params_T}[argv__iex_fetch__params]
 * @returns {Promise<[string, iex_fetch__params_T]>}
 * @private
 */
async function iex__fetch_get__arg_a_(
	path,
	argv__iex_fetch__params = {}
) {
	const iex_fetch__params = {
		...argv__iex_fetch__params
	}
	const IEX_HOST =
		argv__iex_fetch__params.IEX_HOST
		|| import_meta_env_().IEX_HOST
	const IEX_PUBLIC_KEY =
		argv__iex_fetch__params.IEX_PUBLIC_KEY
		|| import_meta_env_().IEX_PUBLIC_KEY
	const IEX_SECRET_KEY =
		argv__iex_fetch__params.IEX_SECRET_KEY
		|| import_meta_env_().IEX_SECRET_KEY
	const schema__host__version = `https://${IEX_HOST}/beta`
	const canonical_uri = `${schema__host__version}${path}`
	const method = 'GET'
	const { query } = argv__iex_fetch__params
	const query_str = query_str_(query, '')
	const canonical_querystring = `token=${IEX_PUBLIC_KEY}${query_str ? `&${query_str}` : ''}`
	const iexdate = `${utc_yyyymmddhhmmss_()}Z`
	const datestamp = utc_yyyymmdd_()
	const canonical_headers = `host:${IEX_HOST}\nx-iex-date:${iexdate}\n`
	const signed_headers = 'host;x-iex-date'
	const payload = ''
	const payload_hash = hex__digest('SHA-256', payload)
	const canonical_request = [
		method,
		canonical_uri,
		canonical_querystring,
		canonical_headers,
		signed_headers,
		payload_hash,
	].join('\n')
	const algorithm = 'IEX-HMAC-SHA256'
	const credential_scope = datestamp + '/' + 'iex_request'
	const string_to_sign = [
		algorithm,
		iexdate,
		credential_scope,
		hex__digest('SHA-256', canonical_request),
	].join('\n')
	const signing_key = await signing_key_(IEX_SECRET_KEY, datestamp)
	const signature = await hmac_('SHA-256', signing_key, string_to_sign)
	const authorization_header = [
		`${algorithm} Credential=${IEX_PUBLIC_KEY}/${credential_scope}`,
		`SignedHeaders=${signed_headers}`,
		`Signature=${signature}`,
	].join(', ')
	const headers = {
		'x-iex-date': iexdate,
		'Authorization': authorization_header
	}
	iex_fetch__params.headers = {
		...argv__iex_fetch__params.headers,
		headers
	}
	return [
		`${canonical_uri}?${canonical_querystring}`,
		iex_fetch__params
	]
}
/**
 * @param {string}IEX_SECRET_KEY
 * @param {string}datestamp
 * @returns {Promise<ArrayBuffer>}
 * @private
 */
async function signing_key_(IEX_SECRET_KEY, datestamp) {
	const signed_date = await hmac_('SHA-256', IEX_SECRET_KEY, datestamp)
	return hmac_('SHA-256', signed_date, 'iex_request')
}
