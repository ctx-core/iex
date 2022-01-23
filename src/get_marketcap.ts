import { iex_fetch } from './iex_fetch.js'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I.js'
import { marketcap_path_ } from './marketcap_path_.js'
import type { quote_params_T } from './quote_params_T.js'
export function get_marketcap(
	{ ticker }:quote_params_T, opts:iex_fetch_opts_I = {}
):Promise<[{ marketcap:string }, Response]> {
	return iex_fetch(marketcap_path_({ ticker }), opts)
}
export {
	get_marketcap as get__marketcap
}
