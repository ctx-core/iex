import { get_peRatio } from '../get_peRatio/index.js'
/**
 * @param {import('./_types').ticker_o_T}params
 * @param {import('./_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<number|null>}
 * @private
 */
export async function peRatio_(params, opts = {}) {
	const [payload, res] = await get_peRatio(params, opts)
	return res.ok ? payload.peRatio : null
}
export { peRatio_ as _peRatio, }
