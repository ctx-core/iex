import { iex__fetch_get } from '../iex__fetch_get/index.js'
/** @typedef {import('@ctx-core/error').HttpError} */
/** @typedef {import('../_types/index.d.ts').IEXRefDataSymbol} */
/**
 * @returns {string}
 * @private
 */
export function ref_data_symbols_path_() {
	return `/ref-data/symbols`
}
/**
 * @param {import('../_types/index.js').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[IEXRefDataSymbol, Response]|[HttpError, Response]>}
 * @private
 */
export async function ref_data_symbols__fetch_get(
	iex_fetch__params = {}
) {
	return iex__fetch_get(
		ref_data_symbols_path_(),
		iex_fetch__params)
}
/**
 * @param {import('../_types/index.js')}[params]
 * @returns {Promise<import('../_types/index.js').IEXRefDataSymbol[]|null>}
 * @private
 */
export async function ref_data_symbol_a_(params = {}) {
	const [
		payload,
		res
	] = await ref_data_symbols__fetch_get(params)
	if (!res.ok) {
		console.error('ref_data_symbol_a_|!res.ok', { payload })
		return null
	}
	return payload
}
