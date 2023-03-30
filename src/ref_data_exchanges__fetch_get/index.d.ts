import type { HttpError } from '@ctx-core/error'
import type { iex_fetch__params_T, international_exchange_T } from '../_types'
export declare function ref_data_exchanges__fetch_get(
	iex_fetch__params?:iex_fetch__params_T
):Promise<
	[international_exchange_T[], Response]
	|[HttpError, Response]
>
export {
	ref_data_exchanges__fetch_get as ref_data_exchanges__get,
	ref_data_exchanges__fetch_get as get__ref_data_exchanges,
	ref_data_exchanges__fetch_get as get_ref_data_exchanges,
}
export type ref_data_exchanges__fetch_get__payload_T = international_exchange_T
