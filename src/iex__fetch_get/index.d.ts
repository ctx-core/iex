import type { HttpError } from '@ctx-core/error'
import type { iex_fetch__params_T } from '../_types'
export declare function iex__fetch_get__queue_size__set(queue_size:number):void
export {
	iex__fetch_get__queue_size__set as iex_fetch__queue_size__set,
}
export declare function iex__fetch_get<T>(
	path:string,
	in_opts?:iex_fetch__params_T
):Promise<[T, Response]|[HttpError, Response]>
export {
	iex__fetch_get as iex_fetch,
	iex__fetch_get as fetch__iex
}
