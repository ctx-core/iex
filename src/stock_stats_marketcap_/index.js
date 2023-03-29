import { stock_stats_marketcap__fetch_get } from '../stock_stats_marketcap__fetch_get/index.js'
/**
 * @param {import('../_types').ticker_o_T}ticker_o
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<string|null>}
 * @private
 */
export async function stock_stats_marketcap_(
	ticker_o,
	iex_fetch__params = {}
) {
	const [
		payload,
		res
	] = await stock_stats_marketcap__fetch_get(ticker_o, iex_fetch__params)
	return res.ok ? payload.marketcap : null
}
export {
	stock_stats_marketcap_ as marketcap_,
	stock_stats_marketcap_ as _marketcap,
}
