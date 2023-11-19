import { iex__fetch_get } from '../iex__fetch_get/index.js'
/** @typedef {import('@ctx-core/error').HttpError} */
/**
 * @param {import('../_types/index.d.ts').fx_rate__params_T}params
 * @returns {string}
 * @private
 */
export function fx_rate_path_(params) {
	const { from, to } = params
	return `/fx/rate/${from}/${to}`
}
/**
 * @param {import('../_types/index.js').fx_rate__params_T} fx_rate__params
 * @param {import('../_types/index.js').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[{ rate:number }, Response]|[HttpError, Response]>}
 * @private
 */
export function fx_rate__fetch_get(
	fx_rate__params,
	iex_fetch__params = {}
) {
	return iex__fetch_get(
		fx_rate_path_(fx_rate__params),
		iex_fetch__params)
}
/**
 * @param {import('../_types/index.js').fx_rate__params_T}fx_rate__params
 * @param {import('../_types/index.js').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<number|null>}
 * @private
 */
export async function fx_rate_(
	fx_rate__params,
	iex_fetch__params = {}
) {
	const { from, to } = fx_rate__params
	if (!from) return null
	if (from === to) return 1
	const [
		payload,
		res
	] = await fx_rate__fetch_get(
		fx_rate__params,
		iex_fetch__params)
	if (!res.ok) {
		console.error('fx_rate_|!res.ok', { payload })
		return null
	}
	return payload.rate
}
