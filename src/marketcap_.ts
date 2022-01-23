import { get_marketcap } from './get_marketcap.js'
import type { quote_params_T } from './quote_params_T.js'
export async function marketcap_(params:quote_params_T, opts = {}):Promise<string|null> {
	const [payload, res] = await get_marketcap(params, opts)
	return res.ok ? payload.marketcap : null
}
export {
	marketcap_ as _marketcap,
}
