import { ref_data_isin__fetch_get } from '../ref_data_isin/index.js'
/**
 * @param {string}[isin]
 * @param {import('../_types/index.js').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<import('iex-cloud').ISINMapping|null>}
 * @private
 */
export async function isin_mapping_(
	isin,
	iex_fetch__params = {}
) {
	const [
		payload,
		res
	] = await ref_data_isin__fetch_get(
		isin,
		iex_fetch__params)
	if (!res.ok) {
		console.error('isin_mapping_|!res.ok', { payload })
		return null
	}
	return payload
}
export {
	isin_mapping_ as ref_data_isin_,
}
