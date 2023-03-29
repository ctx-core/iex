import { iex_fetch } from '../iex_fetch/index.js'
import { stock_company_path_ } from '../stock_company_path_/index.js'
/**
 * @param {import('../_types').ticker_o_T}ticker_o
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[import('iex-ts-client').Company, Response]>}
 * @private
 */
export function stock_company__fetch_get(
	ticker_o,
	iex_fetch__params = {}
) {
	return iex_fetch(stock_company_path_(ticker_o), iex_fetch__params)
}
export {
	stock_company__fetch_get as stock_company__get,
	stock_company__fetch_get as company__get,
	stock_company__fetch_get as get_company,
}
