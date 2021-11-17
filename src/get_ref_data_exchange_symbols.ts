import type { FXSymbols } from 'iex-cloud'
import { iex_fetch } from './iex_fetch.js'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I.js'
import { ref_data_exchange_symbols_path_ } from './ref_data_exchange_symbols_path_.js'
export async function get_ref_data_exchange_symbols(
	params:get_ref_data_exchange_symbols_opts_T, opts:iex_fetch_opts_I
):Promise<Response&{ json():Promise<FXSymbols> }> {
	return iex_fetch(ref_data_exchange_symbols_path_(params), opts)
}
export {
	get_ref_data_exchange_symbols as get__ref_data_exchange_symbols
}
export interface get_ref_data_exchange_symbols_opts_T {
	exchange:string
}
