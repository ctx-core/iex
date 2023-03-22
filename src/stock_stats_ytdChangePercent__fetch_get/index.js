import { iex_fetch } from '../iex_fetch/index.js'
import { stock_stats_ytdChangePercent_path_ } from '../stock_stats_ytdChangePercent_path_/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch_opts_T}[opts]
 * @returns {Promise<[{ ytdChangePercent:number }, Response]>}
 * @private
 */
export function stock_stats_ytdChangePercent__fetch_get(
	params,
	opts = {}
) {
	return iex_fetch(stock_stats_ytdChangePercent_path_(params), opts)
}
export {
	stock_stats_ytdChangePercent__fetch_get as stock_stats_ytdChangePercent__get,
	stock_stats_ytdChangePercent__fetch_get as ytdChangePercent__get,
	stock_stats_ytdChangePercent__fetch_get as get__ytdChangePercent,
	stock_stats_ytdChangePercent__fetch_get as get_ytdChangePercent,
}
