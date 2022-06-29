import { iex_fetch } from '../iex_fetch/index.js'
import { stock_company_path_ } from '../stock_company_path_/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<[import('iex-ts-client').Company, Response]>}
 * @private
 */
export function stock_company__get(params, opts = {}) {
	return iex_fetch(stock_company_path_(params), opts)
}
export {
	stock_company__get as company__get,
	stock_company__get as get_company,
}
