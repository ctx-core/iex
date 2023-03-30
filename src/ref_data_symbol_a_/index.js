import { ref_data_symbols__fetch_get } from '../ref_data_symbols__fetch_get/index.js'
/**
 * @param {import('../_types')}[params]
 * @returns {Promise<import('../_types').IEXRefDataSymbol[]|null>}
 * @private
 */
export async function ref_data_symbol_a_(params = {}) {
	const [
		ref_data_symbols,
		res
	] = await ref_data_symbols__fetch_get(params)
	return res.ok ? ref_data_symbols : null
}
export {
	ref_data_symbol_a_ as iex_ref_data_symbol_a_,
	ref_data_symbol_a_ as ref_data_symbols_,
}
