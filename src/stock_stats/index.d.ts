import type { HttpError } from '@ctx-core/error'
import type { KeyStat } from 'iex-cloud'
import type { iex_fetch__params_T } from '../_types'
export declare function stock_stats_path_(ticker:string):string
export declare function stock_stats__fetch_get(
	ticker:string,
	iex_fetch__params?:iex_fetch__params_T
):Promise<
	[KeyStat, Response]
	|[HttpError, Response]
>
