import { stock_peers__fetch_get } from '../stock_peers__fetch_get/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch_opts_T}[opts]
 * @returns {Promise<string[]|null>}
 * @private
 */
export async function stock_peers_(
	params,
	opts = {}
) {
	const [peers, res] = await stock_peers__fetch_get(params, opts)
	return res.ok ? peers : null
}
export { stock_peers_ as peers_ }
