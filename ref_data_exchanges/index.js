/// <reference types="ctx-core" />
/// <reference types="../types/index.d.ts" />
/// <reference types="./index.d.ts" />
import { iex__fetch_get } from '../iex__fetch_get/index.js'
/**
 * @returns {string}
 * @private
 */
export function ref_data_exchanges_path_() {
	return `/ref-data/exchanges`
}
/**
 * @param {iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[ref_data_exchanges__fetch_get__payload_T[], Response]|[HttpError, Response]>}
 * @private
 */
export async function ref_data_exchanges__fetch_get(
	iex_fetch__params = {}
) {
	return iex__fetch_get(
		ref_data_exchanges_path_(),
		iex_fetch__params)
}
