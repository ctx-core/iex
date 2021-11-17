import { iex_fetch } from './iex_fetch.js'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I.js'
import { peRatio_path_ } from './peRatio_path_.js'
import type { quote_params_T } from './quote_params_T.js'
export function get_peRatio(
	{ ticker }:quote_params_T, opts:iex_fetch_opts_I = {}
):Promise<Response> {
	return iex_fetch(peRatio_path_({ ticker }), opts)
}
export {
	get_peRatio as get__peRatio
}
