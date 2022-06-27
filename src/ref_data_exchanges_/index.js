import { ref_data_exchanges__get } from '../ref_data_exchanges__get/index.js'
/**
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<import('iex-cloud').InternationalExchange[]|null>}
 * @private
 */
export async function ref_data_exchanges_(opts = {}) {
	const [ref_data_exchanges, res] = await ref_data_exchanges__get(opts)
	return res.ok ? ref_data_exchanges : null
}
