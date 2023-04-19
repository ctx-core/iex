import { ref_data_exchanges__fetch_get } from '../ref_data_exchanges/index.js'
/**
 * @param {import('../_types').iex_fetch__params_T}[params]
 * @returns {Promise<import('../_types').international_exchange_T[]|null>}
 * @private
 */
export async function international_exchange_a_(
	params = {}
) {
	const [
		payload,
		res
	] = await ref_data_exchanges__fetch_get(params)
	if (!res.ok) {
		console.error('international_exchange_a_|!res.ok', { payload })
		return null
	}
	return payload
}
