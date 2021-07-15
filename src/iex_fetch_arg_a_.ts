import crypto from 'crypto'
import { clone } from '@ctx-core/object'
import { _utc_yyyymmdd, _utc_yyyymmddhhmmss } from '@ctx-core/date'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I.js'
export function iex_fetch_arg_a_(
	path:string, opts:iex_fetch_opts_I = {}
):[string, iex_fetch_opts_I] {
	const iex_opts:iex_fetch_opts_I = clone(opts)
	const IEX_HOST = opts.IEX_HOST || process.env.IEX_HOST
	const IEX_PUBLIC_KEY = opts.IEX_PUBLIC_KEY || process.env.IEX_PUBLIC_KEY
	const IEX_SECRET_KEY = opts.IEX_SECRET_KEY || process.env.IEX_SECRET_KEY
	const schema__host__version = `https://${IEX_HOST}/beta`
	const canonical_uri = `${schema__host__version}${path}`
	const method = 'GET'
	const canonical_querystring =
		`token=${IEX_PUBLIC_KEY}`
	const iexdate = `${_utc_yyyymmddhhmmss()}Z`
	const datestamp = _utc_yyyymmdd()
	const canonical_headers =
		`host:${IEX_HOST}\nx-iex-date:${iexdate}\n`
	const signed_headers = 'host;x-iex-date'
	const payload = ''
	const payload_hash =
		crypto
			.createHash('sha256')
			.update(payload)
			.digest('hex')
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
		crypto
			.createHash('sha256')
			.update(canonical_request, 'utf8')
			.digest('hex'),
	].join('\n')
	const signing_key = getSignatureKey(IEX_SECRET_KEY as string, datestamp)
	const signature =
		crypto
			.createHmac('sha256', signing_key)
			.update(string_to_sign, 'utf8')
			.digest('hex')
	const authorization_header = [
		`${algorithm} Credential=${IEX_PUBLIC_KEY}/${credential_scope}`,
		`SignedHeaders=${signed_headers}`,
		`Signature=${signature}`,
	].join(', ')
	const headers = {
		'x-iex-date': iexdate,
		'Authorization': authorization_header
	}
	iex_opts.headers = clone(opts.headers, headers)
	return [`${canonical_uri}?${canonical_querystring}`, iex_opts]
}
function getSignatureKey(key:string, datestamp:string) {
	const signedDate = sign(key, datestamp)
	return sign(signedDate, 'iex_request')
}
function sign(secret:string, data:any) {
	return crypto.createHmac('sha256', secret).update(data, 'utf8').digest('hex')
}
export {
	iex_fetch_arg_a_ as _iex_fetch_arg_a1,
	iex_fetch_arg_a_ as _a1__arg__fetch__iex,
}
