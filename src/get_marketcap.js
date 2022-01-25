import { iex_fetch } from './iex_fetch.js'
import { marketcap_path_ } from './marketcap_path_.js'
/**
 * @param {import('./_types').quote_params_T}params
 * @param {import('./_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<[{ marketcap:string }, Response]>}
 * @private
 */
export function get_marketcap(params, opts = {}) {
	return iex_fetch(marketcap_path_(params), opts)
}
export { get_marketcap as get__marketcap }
