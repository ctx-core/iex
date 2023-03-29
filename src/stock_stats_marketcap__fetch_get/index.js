import { iex__fetch_get } from '../iex__fetch_get/index.js'
import { stock_stats_marketcap_path_ } from '../stock_stats_marketcap_path_/index.js'
/** @typedef {import('@ctx-core/error').HttpError}HttpError */
/**
 * @param {import('../_types').ticker_o_T}ticker_o
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[{ marketcap:string }, Response]|[HttpError, Response]>}
 * @private
 */
export function stock_stats_marketcap__fetch_get(
	ticker_o,
	iex_fetch__params = {}
) {
	return iex__fetch_get(stock_stats_marketcap_path_(ticker_o), iex_fetch__params)
}
export {
	stock_stats_marketcap__fetch_get as stock_stats_marketcap__get,
	stock_stats_marketcap__fetch_get as marketcap__get,
	stock_stats_marketcap__fetch_get as get__marketcap,
	stock_stats_marketcap__fetch_get as get_marketcap
}
