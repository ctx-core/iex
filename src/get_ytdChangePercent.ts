import type { Stat } from 'iex-ts-client'
import { iex_fetch } from './iex_fetch.js'
import { ytdChangePercent_path_ } from './ytd_change_percent_path_.js'
import type { quote_params_T } from './quote_params_T.js'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I.js'
export function get_ytdChangePercent(
	{ ticker }:quote_params_T, opts:iex_fetch_opts_I = {}
):Promise<Response&{ json():Promise<Stat> }> {
	return iex_fetch(ytdChangePercent_path_({ ticker }), opts)
}
export {
	get_ytdChangePercent as get__ytdChangePercent
}
