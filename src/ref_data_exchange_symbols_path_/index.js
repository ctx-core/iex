/**
 * @param {import('../ref_data_exchange_symbols__fetch_get').ref_data_exchange_symbols__fetch_get_params_T}params
 * @returns {string}
 * @private
 */
export function ref_data_exchange_symbols_path_(params) {
	const { exchange } = params
	return `/ref-data/exchange/${exchange}/symbols`
}
export {
	ref_data_exchange_symbols_path_ as _ref_data_exchange_symbols_path,
	ref_data_exchange_symbols_path_ as _path__ref_data_exchange_symbols,
}
