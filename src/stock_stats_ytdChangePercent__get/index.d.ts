import type { iex_fetch_opts_I, ticker_o_T } from '../_types'
export declare function stock_stats_ytdChangePercent__get(
	params:ticker_o_T, opts?:iex_fetch_opts_I
):Promise<[
	{ ytdChangePercent:number }, Response
]>
export {
	stock_stats_ytdChangePercent__get as ytdChangePercent__get,
	stock_stats_ytdChangePercent__get as get__ytdChangePercent,
	stock_stats_ytdChangePercent__get as get_ytdChangePercent,
}
