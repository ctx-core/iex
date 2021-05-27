import { get_ref_data_exchange_symbols, get_ref_data_exchange_symbols_opts_type } from './get_ref_data_exchange_symbols'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I'
export async function _ref_data_exchange_symbols(
	params:get_ref_data_exchange_symbols_opts_type, opts:iex_fetch_opts_I
) {
	const res = await get_ref_data_exchange_symbols(params, opts)
	return res.ok && res.json()
}
