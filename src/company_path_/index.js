/**
 * @param {import('../_types').ticker_o_T}params
 * @returns {string}
 * @private
 */
export function company_path_(params) {
	const { ticker } = params
	return `/stock/${ticker}/company`
}
