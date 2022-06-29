import { iex_fetch } from '../iex_fetch/index.js'
import { stock_stats_peRatio_path_ } from '../stock_stats_peRatio_path_/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<[{ peRatio:number }, Response]>}
 * @private
 */
export function stock_stats_peRatio__get(params, opts = {}) {
	return iex_fetch(stock_stats_peRatio_path_(params), opts)
}
export {
	stock_stats_peRatio__get as peRatio__get,
	stock_stats_peRatio__get as get__peRatio,
	stock_stats_peRatio__get as get_peRatio,
}
