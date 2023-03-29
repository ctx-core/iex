import type { HttpError } from '@ctx-core/error'
import type { iex_fetch__params_T, IEXRefDataSymbol } from '../_types'
export declare function ref_data_symbols__fetch_get(
	iex_fetch__params?:iex_fetch__params_T
):Promise<
	[IEXRefDataSymbol[], Response]
	|[HttpError, Response]
>
export {
	ref_data_symbols__fetch_get as ref_data_symbols_path__fetch_get,
	ref_data_symbols__fetch_get as ref_data_symbols__get,
	ref_data_symbols__fetch_get as get__ref_data_symbols,
	ref_data_symbols__fetch_get as get_ref_data_symbols,
}
