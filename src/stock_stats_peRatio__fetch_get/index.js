import { iex_fetch } from '../iex_fetch/index.js'
import { stock_stats_peRatio_path_ } from '../stock_stats_peRatio_path_/index.js'
/**
 * @param {import('../_types').ticker_o_T}ticker_o
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[{ peRatio:number }, Response]>}
 * @private
 */
export function stock_stats_peRatio__fetch_get(
	ticker_o,
	iex_fetch__params = {}
) {
	return iex_fetch(stock_stats_peRatio_path_(ticker_o), iex_fetch__params)
}
export {
	stock_stats_peRatio__fetch_get as stock_stats_peRatio__get,
	stock_stats_peRatio__fetch_get as peRatio__get,
	stock_stats_peRatio__fetch_get as get__peRatio,
	stock_stats_peRatio__fetch_get as get_peRatio,
}
