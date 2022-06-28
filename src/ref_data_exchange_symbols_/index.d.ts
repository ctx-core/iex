import type { iex_fetch_opts_I, IEXRefDataExchangeSymbol } from '../_types'
import type { get_ref_data_exchange_symbols_params_T } from '../ref_data_exchange_symbols__get'
export declare function ref_data_exchange_symbols_(
	params:get_ref_data_exchange_symbols_params_T, opts:iex_fetch_opts_I
):Promise<IEXRefDataExchangeSymbol[]|null>
export { ref_data_exchange_symbols_ as _ref_data_exchange_symbols, }
