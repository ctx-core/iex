import { stock_stats__fetch_get } from '../stock_stats/index.js'
/** @typedef {import('iex-cloud').KeyStat}KeyStat */
/** @typedef {import('../_types').iex_fetch__params_T}iex_fetch__params_T */
/**
 * @param {string}ticker
 * @param {iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<KeyStat|null>}
 * @private
 */
export async function key_stat_(
	ticker,
	iex_fetch__params = {}
) {
	const [
		payload,
		res
	] = await stock_stats__fetch_get(
		ticker,
		iex_fetch__params)
	if (!res.ok) {
		console.error('key_stat_|!res.ok', { payload })
		return null
	}
	return payload
}
export {
	key_stat_ as stock_stats_
}
