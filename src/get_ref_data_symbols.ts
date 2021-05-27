import { iex_fetch } from './iex_fetch'
import { _ref_data_symbols_path } from './_ref_data_symbols_path'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I'
export async function get_ref_data_symbols(opts:iex_fetch_opts_I = {}) {
	return (
		iex_fetch(
			_ref_data_symbols_path(),
			opts)
	)
}
export {
	get_ref_data_symbols as get__ref_data_symbols
}
