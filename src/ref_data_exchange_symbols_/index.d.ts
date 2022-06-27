import type { iex_fetch_opts_I, IEXRefDataExchangeSymbol } from '../_types'
import { get_ref_data_exchange_symbols_params_T } from '../get_ref_data_exchange_symbols'
export declare function ref_data_exchange_symbols_(
	params:get_ref_data_exchange_symbols_params_T, opts:iex_fetch_opts_I
):Promise<IEXRefDataExchangeSymbol[]|null>;
export { ref_data_exchange_symbols_ as _ref_data_exchange_symbols, }
