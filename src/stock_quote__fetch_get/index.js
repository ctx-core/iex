import { iex_fetch } from '../iex_fetch/index.js'
import { stock_quote_path_ } from '../stock_quote_path_/index.js'
/**
 * @param {import('../_types').ticker_o_T}ticker_o
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[import('iex-ts-client').Quote, Response]>}
 * @private
 */
export function stock_quote__fetch_get(
	ticker_o,
	iex_fetch__params = {}
) {
	return iex_fetch(stock_quote_path_(ticker_o), iex_fetch__params)
}
export {
	stock_quote__fetch_get as quote__get,
	stock_quote__fetch_get as get__quote,
	stock_quote__fetch_get as get_quote,
}
