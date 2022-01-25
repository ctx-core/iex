import { iex_fetch } from './iex_fetch.js'
import { peRatio_path_ } from './peRatio_path_.js'
/**
 * @param {import('./_types').quote_params_T}params
 * @param {import('./_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<[{ peRatio:number }, Response]>}
 * @private
 */
export function get_peRatio(params, opts = {}) {
	return iex_fetch(peRatio_path_(params), opts)
}
export { get_peRatio as get__peRatio }
