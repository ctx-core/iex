import { iex__fetch_get } from '../iex__fetch_get/index.js'
/** @typedef {import('@ctx-core/error').HttpError}HttpError */
/** @typedef {import('iex-ts-client').Quote}Quote */
/**
 * @param {string}ticker
 * @returns {string}
 * @private
 */
export function stock_quote_path_(ticker) {
	return `/stock/${ticker}/quote`
}
/**
 * @param {string}ticker
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[Quote, Response]|[HttpError, Response]>}
 * @private
 */
export function stock_quote__fetch_get(
	ticker,
	iex_fetch__params = {}
) {
	return iex__fetch_get(stock_quote_path_(ticker), iex_fetch__params)
}
