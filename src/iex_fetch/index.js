import { fetch } from '@ctx-core/fetch-undici'
import { queue_ } from '@ctx-core/queue'
import { http_error__throw } from '@ctx-core/error'
import { iex_fetch_arg_a_ } from '../iex_fetch_arg_a_/index.js'
let queue = queue_(1)
export function iex_fetch__queue_size__set(queue_size) {
	queue = queue_(queue_size)
}
/**
 * @param {string}path
 * @param {import('../_types').iex_fetch__params_T}[in_opts]
 * @returns {Promise<(any|Response)[]>}
 * @private
 */
export async function iex_fetch(
	path,
	in_opts = {}
) {
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
					setTimeout(()=>
							_iex_fetch(path, in_opts)
								.then(resolve),
						100)
				} catch (err) {
					reject(err)
				}
			})
		} else {
			http_error__throw({
				http_status: res.status,
				url,
				error_message: text,
			})
		}
	}
}
export { iex_fetch as fetch__iex }
