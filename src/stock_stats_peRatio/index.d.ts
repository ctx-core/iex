import type { HttpError } from '@ctx-core/error'
import type { iex_fetch__params_T } from '../_types'
export declare function stock_stats_peRatio_path_(ticker:string):string
export declare function stock_stats_peRatio__fetch_get(
	ticker:string,
	iex_fetch__params?:iex_fetch__params_T
):Promise<
	[{ peRatio:number }, Response]
	|[HttpError, Response]
>
export declare function stock_stats_peRatio_(
	ticker:string,
	iex_fetch__params?:iex_fetch__params_T
):Promise<number|null>
