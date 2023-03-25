import { isin_mapping__fetch_get } from '../isin_mapping__fetch_get/index.js'
/**
 * @param {import('../_types').iex_fetch__params_T}[opts]
 * @returns {Promise<import('iex-cloud').InternationalExchange[]|null>}
 * @private
 */
export async function isin_mapping_(params, opts = {}) {
	const [ref_data_isin, res] = await isin_mapping__fetch_get(params, opts)
	return res.ok ? ref_data_isin : null
}
export {
	isin_mapping_ as ref_data_isin_,
}
