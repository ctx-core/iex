import { iex_fetch } from '../iex_fetch/index.js'
import { quote_path_ } from '../quote_path_/index.js'
/**
 * @param {import('./_types').quote_params_T}params
 * @param {import('./_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<[import('iex-ts-client').Quote, Response]>}
 * @private
 */
export function get_quote(params, opts = {}) {
	return iex_fetch(quote_path_(params), opts)
}
export { get_quote as get__quote }
