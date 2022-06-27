import { marketcap__get } from '../marketcap__get/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<string|null>}
 * @private
 */
export async function marketcap_(params, opts = {}) {
	const [payload, res] = await marketcap__get(params, opts)
	return res.ok ? payload.marketcap : null
}
export { marketcap_ as _marketcap, }
