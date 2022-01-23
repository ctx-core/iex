import type { FXSymbols } from 'iex-cloud'
import { get_ref_data_exchange_symbols, get_ref_data_exchange_symbols_opts_T } from './get_ref_data_exchange_symbols.js'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I.js'
export async function ref_data_exchange_symbols_(
	params:get_ref_data_exchange_symbols_opts_T, opts:iex_fetch_opts_I
):Promise<FXSymbols|null> {
	const [fx_symbols, res] = await get_ref_data_exchange_symbols(params, opts)
	return res.ok ? fx_symbols : null
}
export {
	ref_data_exchange_symbols_ as _ref_data_exchange_symbols,
}
