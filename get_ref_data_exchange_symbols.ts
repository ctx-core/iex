import { _ref_data_exchange_symbols_path } from './_ref_data_exchange_symbols_path'
import { iex_fetch } from './iex_fetch'
import type { iex_fetch_opts_type } from './iex_fetch_opts_type'
export async function get_ref_data_exchange_symbols(
	params:get_ref_data_exchange_symbols_opts_type, opts:iex_fetch_opts_type
) {
	return (
		iex_fetch(
			_ref_data_exchange_symbols_path(params),
			opts)
	)
}
export {
	get_ref_data_exchange_symbols as get__ref_data_exchange_symbols
}
export interface get_ref_data_exchange_symbols_opts_type {
	exchange:string
}
