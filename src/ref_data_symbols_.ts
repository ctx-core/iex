import { get_ref_data_symbols } from './get_ref_data_symbols'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I'
export async function ref_data_symbols_(opts:iex_fetch_opts_I = {}) {
	const res = await get_ref_data_symbols(opts)
	return res.ok && res.json()
}
