import { iex__fetch_get } from '../iex__fetch_get/index.js'
import { stock_company_path_ } from '../stock_company_path_/index.js'
/** @typedef {import('@ctx-core/error').HttpError}HttpError */
/** @typedef {import('iex-ts-client').Company}Company */
/**
 * @param {import('../_types').ticker_o_T}ticker_o
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[Company, Response]|[HttpError, Response]>}
 * @private
 */
export function stock_company__fetch_get(
	ticker_o,
	iex_fetch__params = {}
) {
	return iex__fetch_get(stock_company_path_(ticker_o), iex_fetch__params)
}
export {
	stock_company__fetch_get as stock_company__get,
	stock_company__fetch_get as company__get,
	stock_company__fetch_get as get_company,
}
