import type { FXSymbols } from 'iex-cloud'
import type { iex_fetch_opts_I } from './_types'
import { get_ref_data_exchange_symbols_params_T } from './get_ref_data_exchange_symbols.js'
export declare function ref_data_exchange_symbols_(
	params:get_ref_data_exchange_symbols_params_T, opts:iex_fetch_opts_I
):Promise<FXSymbols|null>;
export { ref_data_exchange_symbols_ as _ref_data_exchange_symbols, }
