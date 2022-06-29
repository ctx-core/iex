import { stock_company__get } from '../stock_company__get/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<import('iex-ts-client').Company|null>}
 * @private
 */
export async function stock_company_(params, opts = {}) {
	const [company, res] = await stock_company__get(params, opts)
	return res.ok ? company : null
}
export { stock_company_ as company_ }
