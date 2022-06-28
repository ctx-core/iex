import { fetch } from '@ctx-core/fetch-undici'
import { queue_ } from '@ctx-core/queue'
import { throw_http_error } from '@ctx-core/error'
import { iex_fetch_arg_a_ } from '../iex_fetch_arg_a_/index.js'
const queue = queue_(1)
/**
 * @param {string}path
 * @param {import('../_types').iex_fetch_opts_I}[in_opts]
 * @returns {Promise<(any|Response)[]>}
 * @private
 */
export async function iex_fetch(path, in_opts = {}) {
	return queue.add(async ()=>_iex_fetch(path, in_opts))
}
async function _iex_fetch(path, in_opts) {
	const [url, opts] = iex_fetch_arg_a_(path, in_opts)
	const res = await fetch(url, opts)
	const text = await res.text()
	if (res.ok) {
		return [JSON.parse(text), res]
	} else {
		if (res.status === 429) {
			return new Promise((resolve, reject)=>{
				try {
					console.error('iex_fetch: 429:', url)
					setTimeout(()=>_iex_fetch(path, in_opts).then(resolve), 100)
				} catch (err) {
					reject(err)
				}
			})
		} else {
			throw_http_error({
				http_status: res.status,
				url,
				error_message: text,
			})
		}
	}
}
export { iex_fetch as fetch__iex }
