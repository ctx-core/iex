import { fetch } from '@ctx-core/fetch-undici'
import { throw_http_error } from '@ctx-core/error'
import { iex_fetch_arg_a_ } from './iex_fetch_arg_a_.js'
/**
 * @param {string}path
 * @param {import('./_types').iex_fetch_opts_I}[in_opts]
 * @returns {Promise<(any|Response)[]>}
 * @private
 */
export async function iex_fetch(path, in_opts = {}) {
	const [url, opts] = iex_fetch_arg_a_(path, in_opts)
	const res = await fetch(url, opts)
	const text = await res.text()
	if (res.ok) {
		return [JSON.parse(text), res]
	} {
		throw_http_error({
			http_status: res.status,
			url,
			error_message: text,
		})
	}
}
export { iex_fetch as fetch__iex }
