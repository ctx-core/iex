import { iex_fetch } from '../iex_fetch/index.js'
import { fx_rate_path_ } from '../fx_rate_path_/index.js'
/**
 * @param {import('../_types').fx_rate_params_T} params
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<[{ rate:number }, Response]>}
 * @private
 */
export function fx_rate__get(params, opts = {}) {
	return iex_fetch(fx_rate_path_(params), opts)
}
export {
	fx_rate__get as get__fx_rate,
	fx_rate__get as get_fx_rate,
}
