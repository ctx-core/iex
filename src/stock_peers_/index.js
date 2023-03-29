import { stock_peers__fetch_get } from '../stock_peers__fetch_get/index.js'
/**
 * @param {import('../_types').ticker_o_T}ticker_o
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<string[]|null>}
 * @private
 */
export async function stock_peers_(
	ticker_o,
	iex_fetch__params = {}
) {
	return stock_peers__fetch_get(ticker_o, iex_fetch__params)
}
export { stock_peers_ as peers_ }
