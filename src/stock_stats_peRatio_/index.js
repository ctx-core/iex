import { stock_stats_peRatio__fetch_get } from '../stock_stats_peRatio__fetch_get/index.js'
/**
 * @param {import('../_types').ticker_o_T}ticker_o
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<number|null>}
 * @private
 */
export async function stock_stats_peRatio_(
	ticker_o,
	iex_fetch__params = {}
) {
	const [
		payload,
		res
	] = await stock_stats_peRatio__fetch_get(ticker_o, iex_fetch__params)
	return res.ok ? payload.peRatio : null
}
export {
	stock_stats_peRatio_ as peRatio_,
	stock_stats_peRatio_ as _peRatio,
}

