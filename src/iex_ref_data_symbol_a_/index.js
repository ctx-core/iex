import { ref_data_symbols__fetch_get } from '../ref_data_symbols__fetch_get/index.js'
/**
 * @param {import('../_types')}[opts]
 * @returns {Promise<import('../_types').IEXRefDataSymbol[]|null>}
 * @private
 */
export async function iex_ref_data_symbol_a_(opts = {}) {
	const [
		ref_data_symbols,
		res
	] = await ref_data_symbols__fetch_get(opts)
	return res.ok ? ref_data_symbols : null
}
export {
	iex_ref_data_symbol_a_ as ref_data_symbols_,
}
