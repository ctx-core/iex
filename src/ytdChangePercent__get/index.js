import { iex_fetch } from '../iex_fetch/index.js'
import { ytdChangePercent_path_ } from '../ytdChangePercent_path_/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<[{ ytdChangePercent:number }, Response]>}
 * @private
 */
export function ytdChangePercent__get(params, opts = {}) {
	return iex_fetch(ytdChangePercent_path_(params), opts)
}
export {
	ytdChangePercent__get as get__ytdChangePercent,
	ytdChangePercent__get as get_ytdChangePercent,
}
