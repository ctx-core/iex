import { iex_fetch } from '../iex_fetch/index.js'
import { stock_stats_marketcap_path_ } from '../stock_stats_marketcap_path_/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch_opts_T}[opts]
 * @returns {Promise<[{ marketcap:string }, Response]>}
 * @private
 */
export function stock_stats_marketcap__fetch_get(
	params,
	opts = {}
) {
	return iex_fetch(stock_stats_marketcap_path_(params), opts)
}
export {
	stock_stats_marketcap__fetch_get as stock_stats_marketcap__get,
	stock_stats_marketcap__fetch_get as marketcap__get,
	stock_stats_marketcap__fetch_get as get__marketcap,
	stock_stats_marketcap__fetch_get as get_marketcap
}
