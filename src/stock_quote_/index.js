import { stock_quote__get } from '../stock_quote__get/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<import('iex-ts-client').Quote|null>}
 * @private
 */
export async function stock_quote_(params, opts = {}) {
	const [quote, res] = await stock_quote__get(params, opts)
	return res.ok ? quote : null
}
export {
	stock_quote_ as quote_,
	stock_quote_ as _quote,
}
