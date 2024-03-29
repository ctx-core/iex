/// <reference types="ctx-core" />
/// <reference types="../_types/index.d.ts" />
import { iex__fetch_get } from '../iex__fetch_get/index.js'
/**
 * @param {string}ticker
 * @returns {string}
 * @private
 */
export function stock_peers_path_(ticker) {
	return `/stock/${ticker}/peers`
}
/**
 * @param {string}ticker
 * @param {iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[string[], Response]|[HttpError, Response]>}
 * @private
 */
export function stock_peers__fetch_get(
	ticker,
	iex_fetch__params = {}
) {
	return iex__fetch_get(
		stock_peers_path_(ticker),
		iex_fetch__params)
}
/**
 * @param {string}ticker
 * @param {iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<string[]|null>}
 * @private
 */
export async function stock_peers_(
	ticker,
	iex_fetch__params = {}
) {
	const [
		payload,
		res
	] = await stock_peers__fetch_get(
		ticker,
		iex_fetch__params)
	if (!res.ok) {
		console.error('stock_peers_|!res.ok', { payload })
		return null
	}
	return payload
}
