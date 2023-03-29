import { iex__fetch_get } from '../iex__fetch_get/index.js'
import { fx_rate_path_ } from '../fx_rate_path_/index.js'
/** @typedef {import('@ctx-core/error').HttpError}HttpError */
/**
 * @param {import('../_types').fx_rate__params_T} fx_rate__params
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[{ rate:number }, Response]|[HttpError, Response]>}
 * @private
 */
export function fx_rate__fetch_get(
	fx_rate__params,
	iex_fetch__params = {}
) {
	return iex__fetch_get(fx_rate_path_(fx_rate__params), iex_fetch__params)
}
export {
	fx_rate__fetch_get as fx_rate__get,
	fx_rate__fetch_get as get__fx_rate,
	fx_rate__fetch_get as get_fx_rate,
}
