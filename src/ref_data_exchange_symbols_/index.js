import { ref_data_exchange_symbols__get } from '../ref_data_exchange_symbols__get/index.js'
/**
 * @param {import('../ref_data_exchange_symbols__get').get_ref_data_exchange_symbols_params_T}params
 * @param {import('../_types').iex_fetch_opts_I}opts
 * @returns {Promise<import('../_types').IEXRefDataExchangeSymbol[]|null>}
 * @private
 */
export async function ref_data_exchange_symbols_(params, opts) {
	const [fx_symbols, res] = await ref_data_exchange_symbols__get(params, opts)
	return res.ok ? fx_symbols : null
}
export { ref_data_exchange_symbols_ as _ref_data_exchange_symbols, }
