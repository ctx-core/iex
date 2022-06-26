import { get_peers } from '../get_peers/index.js'
/**
 * @param {import('./_types').ticker_o_T}params
 * @param {import('./_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<number[]|null>}
 * @private
 */
export async function peers_(params, opts = {}) {
	const [peers, res] = await get_peers(params, opts)
	return res.ok ? peers : null
}
