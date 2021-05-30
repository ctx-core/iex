import { iex_fetch } from './iex_fetch'
import { quote_path_ } from './quote_path_'
import type { quote_params_T } from './quote_params_T'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I'
export function get_quote(
	{ ticker }:quote_params_T, opts:iex_fetch_opts_I = {}
) {
	return iex_fetch(quote_path_({ ticker }), opts)
}
export {
	get_quote as get__quote
}
