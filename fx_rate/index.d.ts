import type { HttpError } from '@ctx-core/error'
import type { fx_rate__params_T, iex_fetch__params_T } from '../_types/index.js'
export declare function fx_rate_path_(params:fx_rate__params_T):string
export declare function fx_rate__fetch_get(
	fx_rate__params:fx_rate__params_T,
	iex_fetch__params?:iex_fetch__params_T
):Promise<
	[{ rate:number }, Response]
	|[HttpError, Response]
>
export declare function fx_rate_(
	fx_rate__params:fx_rate__params_T,
	iex_fetch__params?:iex_fetch__params_T
):Promise<number|undefined>
