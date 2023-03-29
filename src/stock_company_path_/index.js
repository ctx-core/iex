/**
 * @param {import('../_types').ticker_o_T}ticker_o
 * @returns {string}
 * @private
 */
export function stock_company_path_(ticker_o) {
	const { ticker } = ticker_o
	return `/stock/${ticker}/company`
}
export { stock_company_path_ as company_path_ }
