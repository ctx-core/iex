import type { HttpError } from '@ctx-core/error'
import type { iex_fetch__params_T, ticker_o_T } from '../_types'
export declare function stock_stats_ytdChangePercent__fetch_get(
	ticker_o:ticker_o_T,
	iex_fetch__params?:iex_fetch__params_T
):Promise<
	[{ ytdChangePercent:number }, Response]
	|[HttpError, Response]
>
export {
	stock_stats_ytdChangePercent__fetch_get as stock_stats_ytdChangePercent__get,
	stock_stats_ytdChangePercent__fetch_get as ytdChangePercent__get,
	stock_stats_ytdChangePercent__fetch_get as get__ytdChangePercent,
	stock_stats_ytdChangePercent__fetch_get as get_ytdChangePercent,
}
