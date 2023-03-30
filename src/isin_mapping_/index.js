import { ref_data_isin__fetch_get } from '../ref_data_isin/index.js'
/**
 * @param {string}[isin]
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<import('iex-cloud').ISINMapping|null>}
 * @private
 */
export async function isin_mapping_(
	isin,
	iex_fetch__params = {}
) {
	const [
		ref_data_isin,
		res
	] = await ref_data_isin__fetch_get(isin, iex_fetch__params)
	return res.ok ? ref_data_isin : null
}
export {
	isin_mapping_ as ref_data_isin_,
}
