import { get_peRatio } from './get_peRatio'
import type { quote_params_T } from './quote_params_T'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I'
export async function peRatio_(params:quote_params_T, opts:iex_fetch_opts_I = {}) {
	const res = await get_peRatio(params, opts)
	return res.ok && res.json()
}
export {
	peRatio_ as _peRatio,
}
