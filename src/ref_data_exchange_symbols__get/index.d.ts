import type { iex_fetch_opts_I, IEXRefDataExchangeSymbol } from '../_types'
export declare function ref_data_exchange_symbols__get(
	params:get_ref_data_exchange_symbols_params_T, opts:iex_fetch_opts_I
):Promise<[
	IEXRefDataExchangeSymbol[], Response
]>
export interface get_ref_data_exchange_symbols_params_T {
	exchange:string;
}
export {
	ref_data_exchange_symbols__get as get__ref_data_exchange_symbols,
	ref_data_exchange_symbols__get as get_ref_data_exchange_symbols,
}
