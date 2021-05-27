import { iex_fetch } from './iex_fetch'
import { _peRatio_path } from './_peRatio_path'
import type { quote_params_type } from './quote_params_type'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I'
export function get_peRatio(
	{ ticker }:quote_params_type, opts:iex_fetch_opts_I = {}
) {
	return (
		iex_fetch(
			_peRatio_path({ ticker }),
			opts)
	)
}
export {
	get_peRatio as get__peRatio
}
