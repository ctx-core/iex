import type { HttpError } from 'ctx-core/error'
import type { iex_fetch__params_T, international_exchange_T } from '../_types/index.js'
export declare function ref_data_exchanges_path_():string
export declare function ref_data_exchanges__fetch_get(
	iex_fetch__params?:iex_fetch__params_T
):Promise<
	[international_exchange_T[], Response]
	|[HttpError, Response]
>
export type ref_data_exchanges__fetch_get__payload_T = international_exchange_T
