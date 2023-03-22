import type { iex_fetch_opts_T, ticker_o_T } from '../_types'
export declare function stock_stats_ytdChangePercent__fetch_get(
	params:ticker_o_T, opts?:iex_fetch_opts_T
):Promise<[
	{ ytdChangePercent:number },
	Response
]>
export {
	stock_stats_ytdChangePercent__fetch_get as stock_stats_ytdChangePercent__get,
	stock_stats_ytdChangePercent__fetch_get as ytdChangePercent__get,
	stock_stats_ytdChangePercent__fetch_get as get__ytdChangePercent,
	stock_stats_ytdChangePercent__fetch_get as get_ytdChangePercent,
}
