import { get_peRatio } from './get_peRatio'
import type { quote_params_type } from './quote_params_type'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I'
export async function _peRatio(params:quote_params_type, opts:iex_fetch_opts_I = {}) {
	const res = await get_peRatio(params, opts)
	return res.ok && res.json()
}
