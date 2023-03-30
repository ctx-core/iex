import type { HttpError } from '@ctx-core/error'
import type { iex_fetch__params_T } from '../_types'
export declare function iex__fetch_get__queue_size__set(queue_size:number):void
export declare function iex__fetch_get<T>(
	path:string,
	in_opts?:iex_fetch__params_T
):Promise<[T, Response]|[HttpError, Response]>
