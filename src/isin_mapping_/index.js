import { isin_mapping__fetch_get } from '../isin_mapping__fetch_get/index.js'
/**
 * @param {import('../_types').isin_mapping__params_T}[isin_mapping__params]
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<import('iex-cloud').ISINMapping|null>}
 * @private
 */
export async function isin_mapping_(
	isin_mapping__params,
	iex_fetch__params = {}
) {
	const [
		ref_data_isin,
		res
	] = await isin_mapping__fetch_get(isin_mapping__params, iex_fetch__params)
	return res.ok ? ref_data_isin : null
}
export {
	isin_mapping_ as ref_data_isin_,
}
