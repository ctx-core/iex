import { stock_stats_marketcap__get } from '../stock_stats_marketcap__get/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<string|null>}
 * @private
 */
export async function stock_stats_marketcap_(params, opts = {}) {
	const [payload, res] = await stock_stats_marketcap__get(params, opts)
	return res.ok ? payload.marketcap : null
}
export {
	stock_stats_marketcap_ as marketcap_,
	stock_stats_marketcap_ as _marketcap,
}
