import { stock_quote__fetch_get } from '../stock_quote/index.js'
/**
 * @param {string}ticker
 * @param {import('../_types/index.js').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<import('iex-ts-client').Quote|null>}
 * @private
 */
export async function quote_(
	ticker,
	iex_fetch__params = {}
) {
	const [
		payload,
		res
	] = await stock_quote__fetch_get(
		ticker,
		iex_fetch__params)
	if (!res.ok) {
		console.error('quote_|!res.ok', { payload })
		return null
	}
	return payload
}
export {
	quote_ as stock_quote_
}
