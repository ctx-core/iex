import { get_quote } from '../get_quote/index.js'
/**
 * @param {import('./_types').quote_params_T}params
 * @param {import('./_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<import('iex-ts-client').Quote|null>}
 * @private
 */
export async function quote_(params, opts = {}) {
	const [quote, res] = await get_quote(params, opts)
	return res.ok ? quote : null
}
export { quote_ as _quote, }
