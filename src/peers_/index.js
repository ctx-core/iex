import { peers__get } from '../peers__get/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<string[]|null>}
 * @private
 */
export async function peers_(params, opts = {}) {
	const [peers, res] = await peers__get(params, opts)
	return res.ok ? peers : null
}
