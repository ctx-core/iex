import { fetch } from '@ctx-core/fetch-undici'
import { queue_ } from '@ctx-core/queue'
import { iex_fetch_arg_a_ } from '../iex_fetch_arg_a_/index.js'
/** @typedef {import('../_types').iex_fetch__params_T}iex_fetch__params_T */
let queue = queue_(1)
/**
 * @param {number}queue_size
 * @private
 */
export function iex_fetch__queue_size__set(queue_size) {
	queue = queue_(queue_size)
}
/**
 * @param {string}path
 * @param {iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<(any|Response)[]>}
 * @private
 */
export async function iex_fetch(
	path,
	iex_fetch__params = {}
) {
	return queue.add(async ()=>
		_iex_fetch(path, iex_fetch__params))
}
export { iex_fetch as fetch__iex }
/**
 * @param {string}path
 * @param {iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<(any|Response)[]>}
 * @private
 */
async function _iex_fetch(path, iex_fetch__params) {
	const [
		url,
		opts
	] = await iex_fetch_arg_a_(path, iex_fetch__params)
	const res = await fetch(url, opts)
	const text = await res.text()
	if (res.ok) {
		return [JSON.parse(text), res]
	} else {
		if (res.status === 429) {
			return new Promise((resolve, reject)=>{
				console.error('iex_fetch: 429:', url)
				setTimeout(()=>
						_iex_fetch(path, iex_fetch__params)
							.then(resolve),
					100)
			})
		} else {
			return [text, res]
		}
	}
}
