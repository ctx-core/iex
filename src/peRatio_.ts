import { get_peRatio } from './get_peRatio.js'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I.js'
import type { quote_params_T } from './quote_params_T.js'
export async function peRatio_(params:quote_params_T, opts:iex_fetch_opts_I = {}):Promise<number|null> {
	const [payload, res] = await get_peRatio(params, opts)
	return res.ok ? payload.peRatio : null
}
export {
	peRatio_ as _peRatio,
}
