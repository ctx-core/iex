import { iex_fetch } from './iex_fetch.js'
import { quote_path_ } from './quote_path_.js'
import type { quote_params_T } from './quote_params_T.js'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I.js'
export function get_quote(
	{ ticker }:quote_params_T, opts:iex_fetch_opts_I = {}
) {
	return iex_fetch(quote_path_({ ticker }), opts)
}
export {
	get_quote as get__quote
}
