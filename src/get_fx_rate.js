import { iex_fetch } from './iex_fetch.js'
import { fx_rate_path_ } from './fx_rate_path_.js'
/**
 * @param {import('./_types').fx_rate_params_type} params
 * @param {import('./_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<[{ rate:number }, Response]>}
 * @private
 */
export function get_fx_rate(params, opts = {}) {
	return iex_fetch(fx_rate_path_(params), opts)
}
export { get_fx_rate as get__fx_rate }
