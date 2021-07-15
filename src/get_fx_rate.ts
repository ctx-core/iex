import { iex_fetch } from './iex_fetch.js'
import { fx_rate_path_ } from './fx_rate_path_.js'
import type { fx_rate_params_type } from './fx_rate_params_type.js'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I.js'
export function get_fx_rate(
	{ from, to }:fx_rate_params_type, opts:iex_fetch_opts_I = {}
):Promise<Response> {
	return iex_fetch(fx_rate_path_({ from, to }), opts)
}
export {
	get_fx_rate as get__fx_rate
}
