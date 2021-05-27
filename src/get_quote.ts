import { iex_fetch } from './iex_fetch'
import { _quote_path } from './_quote_path'
import type { quote_params_type } from './quote_params_type'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I'
export function get_quote(
	{ ticker }:quote_params_type, opts:iex_fetch_opts_I = {}
) {
	return iex_fetch(_quote_path({ ticker }), opts)
}
export {
	get_quote as get__quote
}
