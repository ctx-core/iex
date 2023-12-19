/// <reference types="ctx-core" />
/// <reference types="../_types/index.d.ts" />
import { iex__fetch_get } from '../iex__fetch_get/index.js'
/**
 * @returns {string}
 * @private
 */
export function ref_data_symbols_path_() {
	return `/ref-data/symbols`
}
/**
 * @param {iex_fetch__params_T}[iex_fetch__params]
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
 * @param {iex_fetch__params_T}[params]
 * @returns {Promise<IEXRefDataSymbol[]|null>}
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
