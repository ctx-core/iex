import type { iex_fetch_opts_I, IEXRefDataExchangeSymbol } from '../_types'
export declare function get_ref_data_exchange_symbols(
	params:get_ref_data_exchange_symbols_params_T, opts:iex_fetch_opts_I
):Promise<[
	IEXRefDataExchangeSymbol[], Response
]>
export { get_ref_data_exchange_symbols as get__ref_data_exchange_symbols }
export interface get_ref_data_exchange_symbols_params_T {
	exchange:string;
}
