import { iex_fetch } from './iex_fetch'
import { peRatio_path_ } from './peRatio_path_'
import type { quote_params_T } from './quote_params_T'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I'
export function get_peRatio(
	{ ticker }:quote_params_T, opts:iex_fetch_opts_I = {}
) {
	return (
		iex_fetch(
			peRatio_path_({ ticker }),
			opts)
	)
}
export {
	get_peRatio as get__peRatio
}
