import { ref_data_symbols__get } from '../ref_data_symbols__get/index.js'
/**
 * @param {import('../_types')}[opts]
 * @returns {Promise<import('../_types').IEXRefDataSymbol[]|null>}
 * @private
 */
export async function ref_data_symbols_(opts = {}) {
	const [ref_data_symbols, res] = await ref_data_symbols__get(opts)
	return res.ok ? ref_data_symbols : null
}
