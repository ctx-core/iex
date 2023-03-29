import { iex__fetch_get } from '../iex__fetch_get/index.js'
import { ref_data_symbols_path_ } from '../ref_data_symbols_path_/index.js'
/** @typedef {import('@ctx-core/error').HttpError}HttpError */
/** @typedef {import('../_types').IEXRefDataSymbol}IEXRefDataSymbol */
/**
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[IEXRefDataSymbol, Response]|[HttpError, Response]>}
 * @private
 */
export async function ref_data_symbols__fetch_get(
	iex_fetch__params = {}
) {
	return iex__fetch_get(ref_data_symbols_path_(), iex_fetch__params)
}
export {
	ref_data_symbols__fetch_get as ref_data_symbols_path__fetch_get,
	ref_data_symbols__fetch_get as ref_data_symbols__get,
	ref_data_symbols__fetch_get as get__ref_data_symbols,
	ref_data_symbols__fetch_get as get_ref_data_symbols,
}
