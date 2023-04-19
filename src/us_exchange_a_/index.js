import { ref_data_market_us_exchanges__fetch_get } from '../ref_data_market_us_exchanges/index.js'
/**
 * @param {import('../_types').iex_fetch__params_T}[params]
 * @returns {Promise<import('iex-cloud').USExchange[]|null>}
 * @private
 */
export async function us_exchange_a_(
	params = {}
) {
	const [
		payload,
		res
	] = await ref_data_market_us_exchanges__fetch_get(params)
	if (!res.ok) {
		console.error('us_exchange_a_|!res.ok', {
			payload
		})
		return null
	}
	return payload
}
export {
	us_exchange_a_ as ref_data_market_us_exchanges_,
}
