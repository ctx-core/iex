import { get_marketcap } from '../get_marketcap/index.js'
/**
 * @param {import('./_types').ticker_o_T}params
 * @param {import('./_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<string|null>}
 * @private
 */
export async function marketcap_(params, opts = {}) {
	const [payload, res] = await get_marketcap(params, opts)
	return res.ok ? payload.marketcap : null
}
export { marketcap_ as _marketcap, }
