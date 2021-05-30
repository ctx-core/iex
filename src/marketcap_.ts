import { get_marketcap } from './get_marketcap'
import type { quote_params_T } from './quote_params_T'
export async function marketcap_(params:quote_params_T, opts = {}) {
	const res = await get_marketcap(params, opts)
	return res.ok && res.json()
}
export {
	marketcap_ as _marketcap,
}
