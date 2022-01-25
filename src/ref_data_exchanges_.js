import { get_ref_data_exchanges } from './get_ref_data_exchanges.js'
/**
 * @param {import('./_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<string[]|null>}
 * @private
 */
export async function ref_data_exchanges_(opts = {}) {
	const [ref_data_exchanges, res] = await get_ref_data_exchanges(opts)
	return res.ok ? ref_data_exchanges : null
}
