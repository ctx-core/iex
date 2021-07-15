import type { FXSymbols } from 'iex-cloud'
import { get_ref_data_symbols } from './get_ref_data_symbols.js'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I.js'
export async function ref_data_symbols_(opts:iex_fetch_opts_I = {}):Promise<FXSymbols|null> {
	const res = await get_ref_data_symbols(opts)
	return res.ok ? res.json() : null
}
