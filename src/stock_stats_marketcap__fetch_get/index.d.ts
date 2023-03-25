import type { iex_fetch__params_T, ticker_o_T } from '../_types'
export declare function stock_stats_marketcap__fetch_get(
	params:ticker_o_T,
	opts?:iex_fetch__params_T
):Promise<[
	{ marketcap:string },
	Response
]>
export {
	stock_stats_marketcap__fetch_get as stock_stats_marketcap__get,
	stock_stats_marketcap__fetch_get as marketcap__get,
	stock_stats_marketcap__fetch_get as get__marketcap,
	stock_stats_marketcap__fetch_get as get_marketcap
}
