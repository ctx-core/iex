import { iex_fetch } from './iex_fetch'
import { ref_data_symbols_path_ } from './ref_data_symbols_path_'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I'
export async function get_ref_data_symbols(opts:iex_fetch_opts_I = {}) {
	return (
		iex_fetch(
			ref_data_symbols_path_(),
			opts)
	)
}
export {
	get_ref_data_symbols as get__ref_data_symbols
}
