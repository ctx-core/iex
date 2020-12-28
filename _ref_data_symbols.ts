import { get_ref_data_symbols } from './get_ref_data_symbols'
import type { iex_fetch_opts_type } from './iex_fetch_opts_type'
export async function _ref_data_symbols(opts:iex_fetch_opts_type = {}) {
	const res = await get_ref_data_symbols(opts)
	return res.ok && res.json()
}
