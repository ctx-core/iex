import type { HttpError } from '@ctx-core/error'
import type { Quote } from 'iex-ts-client'
import type { iex_fetch__params_T } from '../_types'
export declare function stock_quote_path_(ticker:string):string
export declare function stock_quote__fetch_get(
	ticker:string,
	iex_fetch__params?:iex_fetch__params_T
):Promise<
	[Quote, Response]
	|[HttpError, Response]
>
