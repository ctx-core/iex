import { get_ytdChangePercent } from './get_ytdChangePercent.js'
import type { quote_params_T } from './quote_params_T.js'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I.js'
export async function ytdChangePercent_(
	params:quote_params_T, opts:iex_fetch_opts_I = {}
) {
	const res = await get_ytdChangePercent(params, opts)
	return res.ok && res.json()
}
