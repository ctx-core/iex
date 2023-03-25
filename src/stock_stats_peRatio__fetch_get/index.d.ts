import type { iex_fetch__params_T, ticker_o_T } from '../_types'
export declare function stock_stats_peRatio__fetch_get(
	params:ticker_o_T,
	opts?:iex_fetch__params_T
):Promise<[
	{ peRatio:number },
	Response
]>
export {
	stock_stats_peRatio__fetch_get as stock_stats_peRatio__get,
	stock_stats_peRatio__fetch_get as peRatio__get,
	stock_stats_peRatio__fetch_get as get__peRatio,
	stock_stats_peRatio__fetch_get as get_peRatio,
}
