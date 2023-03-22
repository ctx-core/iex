import { iex_fetch } from '../iex_fetch/index.js'
import { ref_data_symbols_path_ } from '../ref_data_symbols_path_/index.js'
/**
 * @param {import('../_types').iex_fetch_opts_T}[opts]
 * @returns {Promise<[import('../_types').IEXRefDataSymbol, Response]>}
 * @private
 */
export async function ref_data_symbols__fetch_get(
	opts = {}
) {
	return iex_fetch(ref_data_symbols_path_(), opts)
}
export {
	ref_data_symbols__fetch_get as ref_data_symbols_path__fetch_get,
	ref_data_symbols__fetch_get as ref_data_symbols__get,
	ref_data_symbols__fetch_get as get__ref_data_symbols,
	ref_data_symbols__fetch_get as get_ref_data_symbols,
}
