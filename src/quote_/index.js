import { stock_quote__fetch_get } from '../stock_quote__fetch_get/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch_opts_T}[opts]
 * @returns {Promise<import('iex-ts-client').Quote|null>}
 * @private
 */
export async function quote_(params, opts = {}) {
	const [quote, res] = await stock_quote__fetch_get(params, opts)
	return res.ok ? quote : null
}
export {
	quote_ as stock_quote_,
	quote_ as _quote,
}
