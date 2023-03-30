import { clone } from '@ctx-core/object'
import { iex__fetch_get } from '../iex__fetch_get/index.js'
/** @typedef {import('@ctx-core/error').HttpError}HttpError */
/** @typedef {import('iex-cloud').ISINMapping}ISINMapping */
/**
 * @returns {string}
 * @private
 */
export function ref_data_isin_path_() {
	return `/ref-data/isin`
}
/**
 * @param {string}[isin]
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[ISINMapping[], Response]|[HttpError, Response]>}
 * @private
 */
export async function ref_data_isin__fetch_get(
	isin,
	iex_fetch__params
) {
	return iex__fetch_get(ref_data_isin_path_(), clone(iex_fetch__params, {
		query: { isin }
	}))
}
export {
	ref_data_isin__fetch_get as isin_mapping__fetch_get,
}
