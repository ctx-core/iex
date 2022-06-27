import { ytdChangePercent__get } from '../ytdChangePercent__get/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<number|null>}
 * @private
 */
export async function ytdChangePercent_(params, opts = {}) {
	const [payload, res] = await ytdChangePercent__get(params, opts)
	return res.ok ? payload.ytdChangePercent : null
}
