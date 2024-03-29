/// <reference types="ctx-core" />
/// <reference types="iex-ts-client" />
/// <reference types="../_types/index.d.ts" />
import { iex__fetch_get } from '../iex__fetch_get/index.js'
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
 * @param {iex_fetch__params_T}[iex_fetch__params]
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
