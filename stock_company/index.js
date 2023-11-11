import { iex__fetch_get } from '../iex__fetch_get/index.js'
/** @typedef {import('@ctx-core/error').HttpError}HttpError */
/** @typedef {import('iex-ts-client').Company}Company */
/**
 * @param {string}ticker
 * @returns {string}
 * @private
 */
export function stock_company_path_(ticker) {
	return `/stock/${ticker}/company`
}
/**
 * @param {string}string
 * @param {import('../_types/index.js').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[Company, Response]|[HttpError, Response]>}
 * @private
 */
export function stock_company__fetch_get(
	string,
	iex_fetch__params = {}
) {
	return iex__fetch_get(
		stock_company_path_(string),
		iex_fetch__params)
}
