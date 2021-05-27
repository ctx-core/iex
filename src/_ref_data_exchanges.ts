import { get_ref_data_exchanges } from './get_ref_data_exchanges'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I'
export async function _ref_data_exchanges(opts:iex_fetch_opts_I = {}) {
	const res = await get_ref_data_exchanges(opts)
	return res.ok && res.json()
}
