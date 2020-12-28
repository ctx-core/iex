import type { get_ref_data_exchange_symbols_opts_type } from './get_ref_data_exchange_symbols'
export function _ref_data_exchange_symbols_path(
	{ exchange }:get_ref_data_exchange_symbols_opts_type
) {
	return `/ref-data/exchange/${exchange}/symbols`
}
export {
	_ref_data_exchange_symbols_path as _path__ref_data_exchange_symbols
}
