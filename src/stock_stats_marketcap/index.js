import { iex__fetch_get } from '../iex__fetch_get/index.js'
/** @typedef {import('@ctx-core/error').HttpError}HttpError */
/**
 * @param {string}ticker
 * @returns {string}
 * @private
 */
export function stock_stats_marketcap_path_(ticker) {
	return `/stock/${ticker}/stats/marketcap`
}
/**
 * @param {string}ticker
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[{ marketcap:string }, Response]|[HttpError, Response]>}
 * @private
 */
export function stock_stats_marketcap__fetch_get(
	ticker,
	iex_fetch__params = {}
) {
	return iex__fetch_get(stock_stats_marketcap_path_(ticker), iex_fetch__params)
}
/**
 * @param {string}ticker
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<string|null>}
 * @private
 */
export async function stock_stats_marketcap_(
	ticker,
	iex_fetch__params = {}
) {
	const [
		payload,
		res
	] = await stock_stats_marketcap__fetch_get(ticker, iex_fetch__params)
	return res.ok ? payload.marketcap : null
}
