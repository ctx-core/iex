import type { iex_fetch_opts_T, IEXRefDataExchangeSymbol } from '../_types'
export declare function ref_data_exchange_symbols__fetch_get(
	params:ref_data_exchange_symbols__fetch_get_params_T,
	opts:iex_fetch_opts_T
):Promise<[
	IEXRefDataExchangeSymbol[],
	Response
]>
export {
	ref_data_exchange_symbols__fetch_get as ref_data_exchange_symbols__get,
	ref_data_exchange_symbols__fetch_get as get__ref_data_exchange_symbols,
	ref_data_exchange_symbols__fetch_get as get_ref_data_exchange_symbols,
}
export interface ref_data_exchange_symbols__fetch_get_params_T {
	exchange:string
}
export type get_ref_data_exchange_symbols_params_T =
	ref_data_exchange_symbols__fetch_get_params_T
