import { stock_company__fetch_get } from '../stock_company__fetch_get/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch__params_T}[opts]
 * @returns {Promise<import('iex-ts-client').Company|null>}
 * @private
 */
export async function company_(
	params,
	opts = {}
) {
	const [company, res] = await stock_company__fetch_get(params, opts)
	return res.ok ? company : null
}
export {
	company_ as stock_company_,
}
