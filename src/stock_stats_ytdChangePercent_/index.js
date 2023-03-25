import { stock_stats_ytdChangePercent__fetch_get } from '../stock_stats_ytdChangePercent__fetch_get/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch__params_T}[opts]
 * @returns {Promise<number|null>}
 * @private
 */
export async function stock_stats_ytdChangePercent_(
	params,
	opts = {}
) {
	const [
		payload,
		res
	] = await stock_stats_ytdChangePercent__fetch_get(params, opts)
	return res.ok ? payload.ytdChangePercent : null
}
export {
	stock_stats_ytdChangePercent_ as ytdChangePercent_
}
