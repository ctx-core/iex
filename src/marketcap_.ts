import type { Stat } from 'iex-ts-client'
import { get_marketcap } from './get_marketcap.js'
import type { quote_params_T } from './quote_params_T.js'
export async function marketcap_(params:quote_params_T, opts = {}):Promise<Stat|null> {
	const res = await get_marketcap(params, opts)
	return res.ok ? res.json() : null
}
export {
	marketcap_ as _marketcap,
}
