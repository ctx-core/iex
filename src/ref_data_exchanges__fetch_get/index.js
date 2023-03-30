import { iex__fetch_get } from '../iex__fetch_get/index.js'
import { ref_data_exchanges_path_ } from '../ref_data_exchanges_path_/index.js'
/** @typedef {import('@ctx-core/error').HttpError}HttpError */
/** @typedef {import('iex-cloud').InternationalExchange}InternationalExchange */
/** @typedef {import('./index.d.ts').ref_data_exchanges__fetch_get__payload_T}ref_data_exchanges__fetch_get__payload_T */
/**
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<ref_data_exchanges__fetch_get__payload_T[], Response]|[HttpError, Response]>}
 * @private
 */
export async function ref_data_exchanges__fetch_get(
	iex_fetch__params = {}
) {
	return iex__fetch_get(ref_data_exchanges_path_(), iex_fetch__params)
}
export {
	ref_data_exchanges__fetch_get as ref_data_exchanges__get,
	ref_data_exchanges__fetch_get as get__ref_data_exchanges,
	ref_data_exchanges__fetch_get as get_ref_data_exchanges,
}
