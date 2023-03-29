import type { HttpError } from '@ctx-core/error'
import type { iex_fetch__params_T, ticker_o_T } from '../_types'
export declare function stock_stats_marketcap__fetch_get(
	ticker_o:ticker_o_T,
	iex_fetch__params?:iex_fetch__params_T
):Promise<
	[{ marketcap:string }, Response]
	|[HttpError, Response]
>
export {
	stock_stats_marketcap__fetch_get as stock_stats_marketcap__get,
	stock_stats_marketcap__fetch_get as marketcap__get,
	stock_stats_marketcap__fetch_get as get__marketcap,
	stock_stats_marketcap__fetch_get as get_marketcap
}
