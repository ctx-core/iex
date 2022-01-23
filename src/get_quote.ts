import type { Quote } from 'iex-ts-client'
import { iex_fetch } from './iex_fetch.js'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I.js'
import type { quote_params_T } from './quote_params_T.js'
import { quote_path_ } from './quote_path_.js'
export function get_quote(
	{ ticker }:quote_params_T, opts:iex_fetch_opts_I = {}
):Promise<[Quote, Response]> {
	return iex_fetch(quote_path_({ ticker }), opts)
}
export {
	get_quote as get__quote
}
