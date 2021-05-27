import { get_quote } from './get_quote'
import type { quote_params_type } from './quote_params_type'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I'
export async function _quote(params:quote_params_type, opts:iex_fetch_opts_I = {}) {
	const res = await get_quote(params, opts)
	return res.ok && res.json()
}
