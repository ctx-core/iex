import type { HttpError } from 'ctx-core/error'
import type { iex_fetch__params_T } from '../_types/index.js'
export declare function stock_stats_ytdChangePercent_path_(
	ticker:string
):string
export declare function stock_stats_ytdChangePercent__fetch_get(
	ticker:string,
	iex_fetch__params?:iex_fetch__params_T
):Promise<
	[{ ytdChangePercent:number }, Response]
	|[HttpError, Response]
>
export declare function stock_stats_ytdChangePercent_(
	ticker:string,
	iex_fetch__params?:iex_fetch__params_T
):Promise<number|null>
