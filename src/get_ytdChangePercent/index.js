import { iex_fetch } from '../iex_fetch/index.js'
import { ytdChangePercent_path_ } from '../ytdChangePercent_path_/index.js'
/**
 * @param {import('./_types').ticker_o_T}params
 * @param {import('./_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<[{ ytdChangePercent:number }, Response]>}
 * @private
 */
export function get_ytdChangePercent(params, opts = {}) {
	return iex_fetch(ytdChangePercent_path_(params), opts)
}
export { get_ytdChangePercent as get__ytdChangePercent }
