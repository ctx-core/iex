import { iex_fetch } from './iex_fetch'
import { fx_rate_path_ } from './fx_rate_path_'
import type { fx_rate_params_type } from './fx_rate_params_type'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I'
export function get_fx_rate(
	{ from, to }:fx_rate_params_type, opts:iex_fetch_opts_I = {}
) {
	return (
		iex_fetch(
			fx_rate_path_({ from, to }),
			opts)
	)
}
export {
	get_fx_rate as get__fx_rate
}
