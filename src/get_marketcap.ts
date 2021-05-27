import { _marketcap_path } from './_marketcap_path'
import { iex_fetch } from './iex_fetch'
import type { quote_params_type } from './quote_params_type'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I'
export function get_marketcap(
	{ ticker }:quote_params_type, opts:iex_fetch_opts_I = {}
) {
	return (
		iex_fetch(
			_marketcap_path({ ticker }),
			opts)
	)
}
export {
	get_marketcap as get__marketcap
}
