import type { Stat } from 'iex-ts-client'
import { get_peRatio } from './get_peRatio.js'
import type { quote_params_T } from './quote_params_T.js'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I.js'
export async function peRatio_(params:quote_params_T, opts:iex_fetch_opts_I = {}):Promise<Stat|null> {
	const res = await get_peRatio(params, opts)
	return res.ok ? res.json() : null
}
export {
	peRatio_ as _peRatio,
}
