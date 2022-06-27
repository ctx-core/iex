import { quote__get } from '../quote__get/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<import('iex-ts-client').Quote|null>}
 * @private
 */
export async function quote_(params, opts = {}) {
	const [quote, res] = await quote__get(params, opts)
	return res.ok ? quote : null
}
export { quote_ as _quote, }
