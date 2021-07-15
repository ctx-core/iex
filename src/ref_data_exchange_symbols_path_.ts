import type { get_ref_data_exchange_symbols_opts_T } from './get_ref_data_exchange_symbols.js'
export function ref_data_exchange_symbols_path_(
	{ exchange }:get_ref_data_exchange_symbols_opts_T
):string {
	return `/ref-data/exchange/${exchange}/symbols`
}
export {
	ref_data_exchange_symbols_path_ as _ref_data_exchange_symbols_path,
	ref_data_exchange_symbols_path_ as _path__ref_data_exchange_symbols,
}
