import { get_fx_rate } from './get_fx_rate'
import type { fx_rate_params_type } from './fx_rate_params_type'
import type { iex_fetch_opts_type } from './iex_fetch_opts_type'
export async function _fx_rate(params:fx_rate_params_type, opts:iex_fetch_opts_type = {}) {
	const { from, to } = params
	if (!from) return
	if (from === to) return 1.0
	const res = await get_fx_rate(params, opts)
	const json = await res.json()
	return json.rate
}
