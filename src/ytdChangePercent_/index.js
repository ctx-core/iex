import { get_ytdChangePercent } from '../get_ytdChangePercent/index.js'
/**
 * @param {import('./_types').quote_params_T}params
 * @param {import('./_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<number|null>}
 * @private
 */
export async function ytdChangePercent_(params, opts = {}) {
	const [payload, res] = await get_ytdChangePercent(params, opts)
	return res.ok ? payload.ytdChangePercent : null
}
