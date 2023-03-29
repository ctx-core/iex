import { clone } from '@ctx-core/object'
import { iex_fetch } from '../iex_fetch/index.js'
import { ref_data_isin_path_ } from '../ref_data_isin_path_/index.js'
/**
 * @param {import('./index.d.ts').isin_mapping__params_T}[isin_mapping__params]
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[import('iex-cloud').ISINMapping[], Response]>}
 * @private
 */
export async function isin_mapping__fetch_get(
	isin_mapping__params, 
	iex_fetch__params
) {
	return iex_fetch(ref_data_isin_path_(), clone(iex_fetch__params, {
		query: { isin: isin_mapping__params.isin }
	}))
}
export {
	isin_mapping__fetch_get as ref_data_isin__get,
	isin_mapping__fetch_get as get_ref_data_isin,
}
