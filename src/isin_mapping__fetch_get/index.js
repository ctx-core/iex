import { clone } from '@ctx-core/object'
import { iex_fetch } from '../iex_fetch/index.js'
import { ref_data_isin_path_ } from '../ref_data_isin_path_/index.js'
/**
 * @param {import('./index.d.ts').isin_mapping_params_T}[params]
 * @param {import('../_types').iex_fetch__params_T}[opts]
 * @returns {Promise<[import('iex-cloud').ISINMapping[], Response]>}
 * @private
 */
export async function isin_mapping__fetch_get(params, opts) {
	return iex_fetch(ref_data_isin_path_(), clone(opts, {
		query: { isin: params.isin }
	}))
}
export {
	isin_mapping__fetch_get as ref_data_isin__get,
	isin_mapping__fetch_get as get_ref_data_isin,
}
