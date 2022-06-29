/**
 * @param {import('../_types').ticker_o_T}params
 * @returns {string}
 * @private
 */
export function stock_company_path_(params) {
	const { ticker } = params
	return `/stock/${ticker}/company`
}
export { stock_company_path_ as company_path_ }
