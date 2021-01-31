import { get_ytdChangePercent } from './get_ytdChangePercent'
import type { quote_params_type } from './quote_params_type'
import type { iex_fetch_opts_type } from './iex_fetch_opts_type'
export async function _ytdChangePercent(
	params:quote_params_type, opts:iex_fetch_opts_type = {}
) {
	const res = await get_ytdChangePercent(params, opts)
	return res.ok && res.json()
}
