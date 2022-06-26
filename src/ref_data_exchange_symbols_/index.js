import { get_ref_data_exchange_symbols } from '../get_ref_data_exchange_symbols/index.js'
/**
 * @param {import('./get_ref_data_exchange_symbols').get_ref_data_exchange_symbols_params_T}params
 * @param {import('_types').iex_fetch_opts_I}opts
 * @returns {Promise<import('iex-cloud').FXSymbols|null>}
 * @private
 */
export async function ref_data_exchange_symbols_(params, opts) {
	const [fx_symbols, res] = await get_ref_data_exchange_symbols(params, opts)
	return res.ok ? fx_symbols : null
}
export { ref_data_exchange_symbols_ as _ref_data_exchange_symbols, }
