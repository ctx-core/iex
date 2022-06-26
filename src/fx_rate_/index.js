import { get_fx_rate } from '../get_fx_rate/index.js'
/**
 * @param {import('./_types').fx_rate_params_T}params
 * @param {import('./_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<number|null>}
 * @private
 */
export async function fx_rate_(params, opts = {}) {
	const { from, to } = params
	if (!from) return null
	if (from === to) return 1
	const [payload, res] = await get_fx_rate(params, opts)
	return res.ok ? payload.rate : null
}
export { fx_rate_ as _fx_rate, }
