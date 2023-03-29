import type { fx_rate__params_T, iex_fetch__params_T } from '../_types'
import type { HttpError } from '@ctx-core/error'
export declare function fx_rate__fetch_get(
	fx_rate__params:fx_rate__params_T,
	iex_fetch__params?:iex_fetch__params_T
):Promise<
	[{ rate:number }, Response]
	|[HttpError, Response]
>
export {
	fx_rate__fetch_get as fx_rate__get,
	fx_rate__fetch_get as get__fx_rate,
	fx_rate__fetch_get as get_fx_rate,
}
