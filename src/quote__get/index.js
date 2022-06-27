import { iex_fetch } from '../iex_fetch/index.js'
import { quote_path_ } from '../quote_path_/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<[import('iex-ts-client').Quote, Response]>}
 * @private
 */
export function quote__get(params, opts = {}) {
	return iex_fetch(quote_path_(params), opts)
}
export {
	quote__get as get__quote,
	quote__get as get_quote,
}
