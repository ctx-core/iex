/**
 * @param {import('../_types').ticker_o_T}ticker_o
 * @returns {string}
 * @private
 */
export function stock_quote_path_(ticker_o) {
	const { ticker } = ticker_o
	return `/stock/${ticker}/quote`
}
export {
	stock_quote_path_ as quote_path_,
	stock_quote_path_ as _quote_path,
	stock_quote_path_ as _path__quote,
}
