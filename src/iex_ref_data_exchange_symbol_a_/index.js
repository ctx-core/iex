import { ref_data_exchange_symbols__fetch_get } from '../ref_data_exchange_symbols__fetch_get/index.js'
/**
 * @param {import('../ref_data_exchange_symbols__fetch_get').ref_data_exchange_symbols__fetch_get_params_T}params
 * @param {import('../_types').iex_fetch__params_T}opts
 * @returns {Promise<import('../_types').IEXRefDataExchangeSymbol[]|null>}
 * @private
 */
export async function iex_ref_data_exchange_symbol_a_(
	params,
	opts
) {
	const [
		fx_symbols,
		res
	] = await ref_data_exchange_symbols__fetch_get(params, opts)
	return res.ok ? fx_symbols : null
}
export {
	iex_ref_data_exchange_symbol_a_ as ref_data_exchange_symbols_,
	iex_ref_data_exchange_symbol_a_ as _ref_data_exchange_symbols,
}
