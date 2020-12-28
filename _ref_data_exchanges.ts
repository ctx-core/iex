import { get_ref_data_exchanges } from './get_ref_data_exchanges'
import type { iex_fetch_opts_type } from './iex_fetch_opts_type'
export async function _ref_data_exchanges(opts:iex_fetch_opts_type = {}) {
	const res = await get_ref_data_exchanges(opts)
	return res.ok && res.json()
}
