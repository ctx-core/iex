import { ref_data_exchange_symbols__fetch_get } from '../ref_data_exchange_symbols__fetch_get/index.js'
/**
 * @param {import('../ref_data_exchange_symbols__fetch_get').ref_data_exchange_symbols__fetch_get_params_T}params
 * @param {import('../_types').iex_fetch__params_T}iex_fetch__params
 * @returns {Promise<import('../_types').IEXRefDataExchangeSymbol[]|null>}
 * @private
 */
export async function ref_data_exchange_symbol_a_(
	params,
	iex_fetch__params
) {
	const [
		fx_symbols,
		res
	] = await ref_data_exchange_symbols__fetch_get(params, iex_fetch__params)
	return res.ok ? fx_symbols : null
}
export {
	ref_data_exchange_symbol_a_ as iex_ref_data_exchange_symbol_a_,
	ref_data_exchange_symbol_a_ as ref_data_exchange_symbols_,
	ref_data_exchange_symbol_a_ as _ref_data_exchange_symbols,
}
