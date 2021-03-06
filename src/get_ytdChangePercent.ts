import { iex_fetch } from './iex_fetch'
import { ytdChangePercent_path_ } from './ytd_change_percent_path_'
import type { quote_params_T } from './quote_params_T'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I'
export function get_ytdChangePercent(
	{ ticker }:quote_params_T, opts:iex_fetch_opts_I = {}
) {
	return (
		iex_fetch(
			ytdChangePercent_path_({ ticker }),
			opts)
	)
}
export {
	get_ytdChangePercent as get__ytdChangePercent
}
