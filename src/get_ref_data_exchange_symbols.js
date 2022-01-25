import { iex_fetch } from './iex_fetch.js'
import { ref_data_exchange_symbols_path_ } from './ref_data_exchange_symbols_path_.js'
/**
 * @param {import('./get_ref_data_exchange_symbols.d.ts').get_ref_data_exchange_symbols_params_T}params
 * @param {import('./_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<[import('iex-cloud').FXSymbols, Response]>}
 * @private
 */
export async function get_ref_data_exchange_symbols(params, opts) {
	return iex_fetch(ref_data_exchange_symbols_path_(params), opts)
}
export { get_ref_data_exchange_symbols as get__ref_data_exchange_symbols }
