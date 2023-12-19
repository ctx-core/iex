import type { HttpError } from 'ctx-core/error'
import type { iex_fetch__params_T } from '../_types/index.js'
export declare function stock_stats_marketcap_path_(ticker:string):string
export declare function stock_stats_marketcap__fetch_get(
	ticker:string,
	iex_fetch__params?:iex_fetch__params_T
):Promise<
	[{ marketcap:string }, Response]
	|[HttpError, Response]
>
export declare function stock_stats_marketcap_(
	ticker:string,
	iex_fetch__params?:iex_fetch__params_T
):Promise<string|null>
