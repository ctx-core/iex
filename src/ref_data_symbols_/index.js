import { get_ref_data_symbols } from '../get_ref_data_symbols/index.js'
/**
 * @param {import('./_types')}[opts]
 * @returns {Promise<import('iex-cloud').FXSymbols|null>}
 * @private
 */
export async function ref_data_symbols_(opts = {}) {
	const [ref_data_symbols, res] = await get_ref_data_symbols(opts)
	return res.ok ? ref_data_symbols : null
}
