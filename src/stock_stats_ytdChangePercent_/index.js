import { stock_stats_ytdChangePercent__fetch_get } from '../stock_stats_ytdChangePercent__fetch_get/index.js'
/**
 * @param {import('../_types').ticker_o_T}ticker_o
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<number|null>}
 * @private
 */
export async function stock_stats_ytdChangePercent_(
	ticker_o,
	iex_fetch__params = {}
) {
	const [
		payload,
		res
	] = await stock_stats_ytdChangePercent__fetch_get(ticker_o, iex_fetch__params)
	return res.ok ? payload.ytdChangePercent : null
}
export {
	stock_stats_ytdChangePercent_ as ytdChangePercent_
}
