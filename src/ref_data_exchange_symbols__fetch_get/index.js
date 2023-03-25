import { iex_fetch } from '../iex_fetch/index.js'
import { ref_data_exchange_symbols_path_ } from '../ref_data_exchange_symbols_path_/index.js'
/**
 * @param {import('../ref_data_exchange_symbols__fetch_get').ref_data_exchange_symbols__fetch_get_params_T}params
 * @param {import('../_types').iex_fetch__params_T}[opts]
 * @returns {Promise<[import('iex-cloud').IEXRefDataExchangeSymbol[], Response]>}
 * @private
 */
export async function ref_data_exchange_symbols__fetch_get(
	params,
	opts
) {
	return iex_fetch(ref_data_exchange_symbols_path_(params), opts)
}
export {
	ref_data_exchange_symbols__fetch_get as ref_data_exchange_symbols__get,
	ref_data_exchange_symbols__fetch_get as get__ref_data_exchange_symbols,
	ref_data_exchange_symbols__fetch_get as get_ref_data_exchange_symbols,
}
