import { fx_rate__fetch_get } from '../fx_rate__fetch_get/index.js'
/**
 * @param {import('../_types').fx_rate__params_T}fx_rate__params
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<number|null>}
 * @private
 */
export async function fx_rate_(
	fx_rate__params,
	iex_fetch__params = {}
) {
	const { from, to } = fx_rate__params
	if (!from) return null
	if (from === to) return 1
	const [
		payload,
		res
	] = await fx_rate__fetch_get(fx_rate__params, iex_fetch__params)
	return res.ok ? payload.rate : null
}
export { fx_rate_ as _fx_rate, }
