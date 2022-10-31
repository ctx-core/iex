import { stock_stats_peRatio__get } from '../stock_stats_peRatio__get/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<number|null>}
 * @private
 */
export async function stock_stats_peRatio_(params, opts = {}) {
	const [payload, res] = await stock_stats_peRatio__get(params, opts)
	return res.ok ? payload.peRatio : null
}
export {
	stock_stats_peRatio_ as peRatio_,
	stock_stats_peRatio_ as _peRatio,
}
