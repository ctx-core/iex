import { hex__digest, hmac_ } from '@ctx-core/crypto'
import { utc_yyyymmdd_, utc_yyyymmddhhmmss_ } from '@ctx-core/date'
import { import_meta_env_ } from '@ctx-core/env'
import { clone } from '@ctx-core/object'
import { query_str_ } from '@ctx-core/uri'
/**
 * @param {string}path
 * @param {import('../_types').iex_fetch__params_T}[params]
 * @returns {(string|object)[]}
 * @private
 */
export async function iex_fetch_arg_a_(
	path,
	params = {}
) {
	const iex_opts = clone(params)
	const IEX_HOST = params.IEX_HOST || import_meta_env_().IEX_HOST
	const IEX_PUBLIC_KEY =
		params.IEX_PUBLIC_KEY
		|| import_meta_env_().IEX_PUBLIC_KEY
	const IEX_SECRET_KEY =
		params.IEX_SECRET_KEY
		|| import_meta_env_().IEX_SECRET_KEY
	const schema__host__version = `https://${IEX_HOST}/beta`
	const canonical_uri = `${schema__host__version}${path}`
	const method = 'GET'
	const { query } = params
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
	iex_opts.headers = clone(params.headers, headers)
	return [
		`${canonical_uri}?${canonical_querystring}`,
		iex_opts
	]
}
export {
	iex_fetch_arg_a_ as _iex_fetch_arg_a1,
	iex_fetch_arg_a_ as _a1__arg__fetch__iex,
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
