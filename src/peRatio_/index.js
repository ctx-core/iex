import { peRatio__get } from '../peRatio__get/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<number|null>}
 * @private
 */
export async function peRatio_(params, opts = {}) {
	const [payload, res] = await peRatio__get(params, opts)
	return res.ok ? payload.peRatio : null
}
export { peRatio_ as _peRatio, }
