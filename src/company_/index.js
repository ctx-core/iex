import { stock_company__fetch_get } from '../stock_company/index.js'
/**
 * @param {string}ticker
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<import('iex-ts-client').Company|null>}
 * @private
 */
export async function company_(
	ticker,
	iex_fetch__params = {}
) {
	const [
		payload,
		res
	] = await stock_company__fetch_get(
		ticker,
		iex_fetch__params)
	if (!res.ok) {
		console.error('company_|!res.ok', { payload })
		return null
	}
	return payload
}
export {
	company_ as stock_company_,
}
