import type { HttpError } from 'ctx-core/error'
import type { iex_fetch__params_T, IEXRefDataSymbol } from '../_types/index.js'
export declare function ref_data_symbols_path_():string
export declare function ref_data_symbols__fetch_get(
	iex_fetch__params?:iex_fetch__params_T
):Promise<
	[IEXRefDataSymbol[], Response]
	|[HttpError, Response]
>
export declare function ref_data_symbol_a_(
	params?:iex_fetch__params_T
):Promise<IEXRefDataSymbol[]|null>
