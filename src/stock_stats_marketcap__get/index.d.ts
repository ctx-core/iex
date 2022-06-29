import type { iex_fetch_opts_I, ticker_o_T } from '../_types'
export declare function stock_stats_marketcap__get(params:ticker_o_T, opts?:iex_fetch_opts_I):Promise<[
	{ marketcap:string }, Response
]>
export {
	stock_stats_marketcap__get as marketcap__get,
	stock_stats_marketcap__get as get__marketcap,
	stock_stats_marketcap__get as get_marketcap
}
