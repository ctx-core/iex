import { iex_fetch } from './iex_fetch'
import { _fx_rate_path } from './_fx_rate_path'
import type { fx_rate_params_type } from './fx_rate_params_type'
import type { iex_fetch_opts_type } from './iex_fetch_opts_type'
export function get_fx_rate(
	{ from, to }:fx_rate_params_type, opts:iex_fetch_opts_type = {}
) {
	return (
		iex_fetch(
			_fx_rate_path({ from, to }),
			opts)
	)
}
export {
	get_fx_rate as get__fx_rate
}
