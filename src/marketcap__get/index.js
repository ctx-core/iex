import { iex_fetch } from '../iex_fetch/index.js'
import { marketcap_path_ } from '../marketcap_path_/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<[{ marketcap:string }, Response]>}
 * @private
 */
export function marketcap__get(params, opts = {}) {
	return iex_fetch(marketcap_path_(params), opts)
}
export {
	marketcap__get as get__marketcap,
	marketcap__get as get_marketcap
}
