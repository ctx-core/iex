import { stock_company__fetch_get } from '../stock_company__fetch_get/index.js'
/**
 * @param {import('../_types').ticker_o_T}iex_fetch__params
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<import('iex-ts-client').Company|null>}
 * @private
 */
export async function company_(
	ticker_o,
	iex_fetch__params = {}
) {
	const [
		company,
		res
	] = await stock_company__fetch_get(ticker_o, iex_fetch__params)
	return res.ok ? company : null
}
export {
	company_ as stock_company_,
}
