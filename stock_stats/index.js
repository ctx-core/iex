/// <reference types="ctx-core" />
/// <reference types="iex-cloud" />
/// <reference types="../_types/index.d.ts" />
import { iex__fetch_get } from '../iex__fetch_get/index.js'
/** @typedef {import('iex-cloud').KeyStat}KeyStat */
/**
 * @param {string}ticker
 * @returns {string}
 * @private
 */
export function stock_stats_path_(ticker) {
	return `/stock/${ticker}/stats`
}
/**
 * @param {string}ticker
 * @param {iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[KeyStat, Response]|[HttpError, Response]>}
 * @private
 */
export function stock_stats__fetch_get(
	ticker,
	iex_fetch__params = {}
) {
	return iex__fetch_get(
		stock_stats_path_(ticker),
		iex_fetch__params)
}
