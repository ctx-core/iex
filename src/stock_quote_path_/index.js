/**
 * @param {import('../_types').ticker_o_T}params
 * @returns {string}
 * @private
 */
export function stock_quote_path_(params) {
	const { ticker } = params
	return `/stock/${ticker}/quote`
}
export {
	stock_quote_path_ as quote_path_,
	stock_quote_path_ as _quote_path,
	stock_quote_path_ as _path__quote,
}
