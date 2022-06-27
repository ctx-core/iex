import { company__get } from '../company__get/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<import('iex-ts-client').Company|null>}
 * @private
 */
export async function company_(params, opts = {}) {
	const [company, res] = await company__get(params, opts)
	return res.ok ? company : null
}
export { company_ as _company, }
