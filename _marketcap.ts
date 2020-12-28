import { get_marketcap } from './get_marketcap'
import type { quote_params_type } from './quote_params_type'
export async function _marketcap(params:quote_params_type, opts = {}) {
	const res = await get_marketcap(params, opts)
	return res.ok && res.json()
}
