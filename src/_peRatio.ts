import { get_peRatio } from './get_peRatio'
import type { quote_params_type } from './quote_params_type'
import type { iex_fetch_opts_type } from './iex_fetch_opts_type'
export async function _peRatio(params:quote_params_type, opts:iex_fetch_opts_type = {}) {
	const res = await get_peRatio(params, opts)
	return res.ok && res.json()
}
