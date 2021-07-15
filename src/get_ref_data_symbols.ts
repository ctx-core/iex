import { iex_fetch } from './iex_fetch.js'
import { ref_data_symbols_path_ } from './ref_data_symbols_path_.js'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I.js'
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
