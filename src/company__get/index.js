import { iex_fetch } from '../iex_fetch/index.js'
import { company_path_ } from '../company_path_/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<[import('iex-ts-client').Company, Response]>}
 * @private
 */
export function company__get(params, opts = {}) {
	return iex_fetch(company_path_(params), opts)
}
export {
	company__get as get_company,
}
