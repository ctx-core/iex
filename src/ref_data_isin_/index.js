import { ref_data_isin__get } from '../ref_data_isin__get/index.js'
/**
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<import('iex-cloud').InternationalExchange[]|null>}
 * @private
 */
export async function ref_data_isin_(params, opts = {}) {
	const [ref_data_isin, res] = await ref_data_isin__get(params, opts)
	return res.ok ? ref_data_isin : null
}
