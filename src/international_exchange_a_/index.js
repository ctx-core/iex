import { ref_data_exchanges__fetch_get } from '../ref_data_exchanges__fetch_get/index.js'
/**
 * @param {import('../_types').iex_fetch_opts_T}[opts]
 * @returns {Promise<import('iex-cloud').InternationalExchange[]|null>}
 * @private
 */
export async function international_exchange_a_(
	opts = {}
) {
	const [
		ref_data_exchanges,
		res
	] = await ref_data_exchanges__fetch_get(opts)
	return res.ok ? ref_data_exchanges : null
}
export {
	international_exchange_a_ as ref_data_exchanges_,
}
