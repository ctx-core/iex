import type { HttpError } from '@ctx-core/error'
import type { iex_fetch__params_T } from '../_types'
export declare function stock_peers_path_(ticker:string):string
export declare function stock_peers__fetch_get(
	ticker:string,
	iex_fetch__params:iex_fetch__params_T
):Promise<
	[string[], Response]
	|[HttpError, Response]
>
export declare function stock_peers_(
	ticker:string,
	iex_fetch__params?:iex_fetch__params_T
):Promise<string[]|null>
