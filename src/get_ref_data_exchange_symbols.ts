import { ref_data_exchange_symbols_path_ } from './ref_data_exchange_symbols_path_'
import { iex_fetch } from './iex_fetch'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I'
export async function get_ref_data_exchange_symbols(
	params:get_ref_data_exchange_symbols_opts_T, opts:iex_fetch_opts_I
) {
	return (
		iex_fetch(
			ref_data_exchange_symbols_path_(params),
			opts)
	)
}
export {
	get_ref_data_exchange_symbols as get__ref_data_exchange_symbols
}
export interface get_ref_data_exchange_symbols_opts_T {
	exchange:string
}
