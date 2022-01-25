import { iex_fetch } from './iex_fetch.js'
import { ytdChangePercent_path_ } from './ytd_change_percent_path_.js'
/**
 * @param {import('./_types').quote_params_T}params
 * @param {import('./_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<[{ ytdChangePercent:number }, Response]>}
 * @private
 */
export function get_ytdChangePercent(params, opts = {}) {
	return iex_fetch(ytdChangePercent_path_(params), opts)
}
export { get_ytdChangePercent as get__ytdChangePercent }
