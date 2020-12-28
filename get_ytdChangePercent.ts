import { iex_fetch } from './iex_fetch'
import { _ytdChangePercent_path } from './_ytdChangePercent_path'
import type { quote_params_type } from './quote_params_type'
import type { iex_fetch_opts_type } from './iex_fetch_opts_type'
export function get_ytdChangePercent(
	{ ticker }:quote_params_type, opts:iex_fetch_opts_type = {}
) {
	return (
		iex_fetch(
			_ytdChangePercent_path({ ticker }),
			opts)
	)
}
export {
	get_ytdChangePercent as get__ytdChangePercent
}
