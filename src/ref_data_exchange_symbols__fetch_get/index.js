import { iex__fetch_get } from '../iex__fetch_get/index.js'
import { ref_data_exchange_symbols_path_ } from '../ref_data_exchange_symbols_path_/index.js'
/** @typedef {import('@ctx-core/error').HttpError}HttpError */
/** @typedef {import('iex-cloud').IEXRefDataExchangeSymbol}IEXRefDataExchangeSymbol */
/**
 * @param {import('../ref_data_exchange_symbols__fetch_get').ref_data_exchange_symbols__fetch_get_params_T}params
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[IEXRefDataExchangeSymbol[], Response]|[HttpError, Response]>}
 * @private
 */
export async function ref_data_exchange_symbols__fetch_get(
	params,
	iex_fetch__params
) {
	return iex__fetch_get(ref_data_exchange_symbols_path_(params), iex_fetch__params)
}
export {
	ref_data_exchange_symbols__fetch_get as ref_data_exchange_symbols__get,
	ref_data_exchange_symbols__fetch_get as get__ref_data_exchange_symbols,
	ref_data_exchange_symbols__fetch_get as get_ref_data_exchange_symbols,
}
