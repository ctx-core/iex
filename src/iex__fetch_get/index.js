import { http_error_ } from '@ctx-core/error'
import { fetch } from '@ctx-core/fetch-undici'
import { queue_ } from '@ctx-core/queue'
import { iex__fetch_get__arg_a_ } from '../iex__fetch_get__arg_a_/index.js'
/** @typedef {import('@ctx-core/error').HttpError}HttpError */
/** @typedef {import('../_types').iex_fetch__params_T}iex_fetch__params_T */
let queue = queue_(1)
/**
 * @param {number}queue_size
 * @private
 */
export function iex__fetch_get__queue_size__set(queue_size) {
	queue = queue_(queue_size)
}
export {
	iex__fetch_get__queue_size__set as iex_fetch__queue_size__set,
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
export {
	iex__fetch_get as iex_fetch,
	iex__fetch_get as fetch__iex
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
