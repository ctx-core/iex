/// <reference types="ctx-core" />
/// <reference types="iex-cloud" />
import { iex__fetch_get } from '../iex__fetch_get/index.js'
/** @typedef {import('iex-cloud').USExchange}USExchange */
/**
 * @returns {string}
 * @private
 */
export function ref_data_market_us_exchanges_path_() {
	return `/ref-data/market/us/exchanges`
}
/**
 * @param {import('../_types/index.js').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[USExchange[], Response]|[HttpError, Response]>}
 * @private
 */
export async function ref_data_market_us_exchanges__fetch_get(
	iex_fetch__params = {}
) {
	return iex__fetch_get(
		ref_data_market_us_exchanges_path_(),
		iex_fetch__params)
}
