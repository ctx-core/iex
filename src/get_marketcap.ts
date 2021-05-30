import { marketcap_path_ } from './marketcap_path_'
import { iex_fetch } from './iex_fetch'
import type { quote_params_T } from './quote_params_T'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I'
export function get_marketcap(
	{ ticker }:quote_params_T, opts:iex_fetch_opts_I = {}
) {
	return (
		iex_fetch(
			marketcap_path_({ ticker }),
			opts)
	)
}
export {
	get_marketcap as get__marketcap
}
