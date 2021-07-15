import { get_quote } from './get_quote.js'
import type { quote_params_T } from './quote_params_T.js'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I.js'
export async function quote_(params:quote_params_T, opts:iex_fetch_opts_I = {}) {
	const res = await get_quote(params, opts)
	return res.ok && res.json()
}
export {
	quote_ as _quote,
}
