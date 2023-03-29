import { clone } from '@ctx-core/object'
import { iex__fetch_get } from '../iex__fetch_get/index.js'
import { ref_data_isin_path_ } from '../ref_data_isin_path_/index.js'
/** @typedef {import('@ctx-core/error').HttpError}HttpError */
/** @typedef {import('iex-cloud').ISINMapping}ISINMapping */
/**
 * @param {import('./index.d.ts').isin_mapping__params_T}[isin_mapping__params]
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[ISINMapping[], Response]|[HttpError, Response]>}
 * @private
 */
export async function isin_mapping__fetch_get(
	isin_mapping__params, 
	iex_fetch__params
) {
	return iex__fetch_get(ref_data_isin_path_(), clone(iex_fetch__params, {
		query: { isin: isin_mapping__params.isin }
	}))
}
export {
	isin_mapping__fetch_get as ref_data_isin__get,
	isin_mapping__fetch_get as get_ref_data_isin,
}
