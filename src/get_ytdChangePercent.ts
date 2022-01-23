import { iex_fetch } from './iex_fetch.js'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I.js'
import type { quote_params_T } from './quote_params_T.js'
import { ytdChangePercent_path_ } from './ytd_change_percent_path_.js'
export function get_ytdChangePercent(
	{ ticker }:quote_params_T, opts:iex_fetch_opts_I = {}
):Promise<[{ ytdChangePercent: number }, Response]> {
	return iex_fetch(ytdChangePercent_path_({ ticker }), opts)
}
export {
	get_ytdChangePercent as get__ytdChangePercent
}
