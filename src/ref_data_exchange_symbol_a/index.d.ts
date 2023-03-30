import type { HttpError } from '@ctx-core/error'
import type { iex_fetch__params_T, IEXRefDataExchangeSymbol } from '../_types'
export declare function ref_data_exchange_symbols_path_(
	exchange:string
):string
export declare function ref_data_exchange_symbols__fetch_get(
	exchange:string,
	iex_fetch__params:iex_fetch__params_T
):Promise<
	[IEXRefDataExchangeSymbol[], Response]
	|[HttpError, Response]>
export declare function ref_data_exchange_symbol_a_(
	exchange:string,
	iex_fetch__params:iex_fetch__params_T
):Promise<IEXRefDataExchangeSymbol[]|null>
