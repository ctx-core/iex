import { iex__fetch_get } from '../iex__fetch_get/index.js'
/**
 * @param {string}exchange
 * @returns {string}
 * @private
 */
/** @typedef {import('@ctx-core/error').HttpError}HttpError */
/** @typedef {import('iex-cloud').IEXRefDataExchangeSymbol}IEXRefDataExchangeSymbol */
export function ref_data_exchange_symbols_path_(exchange) {
	return `/ref-data/exchange/${exchange}/symbols`
}
/**
 * @param {string}exchange
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[IEXRefDataExchangeSymbol[], Response]|[HttpError, Response]>}
 * @private
 */
export async function ref_data_exchange_symbols__fetch_get(
	exchange,
	iex_fetch__params
) {
	return iex__fetch_get(ref_data_exchange_symbols_path_(exchange), iex_fetch__params)
}
/**
 * @param {string}exchange
 * @param {import('../_types').iex_fetch__params_T}iex_fetch__params
 * @returns {Promise<import('../_types').IEXRefDataExchangeSymbol[]|null>}
 * @private
 */
export async function ref_data_exchange_symbol_a_(
	exchange,
	iex_fetch__params
) {
	const [
		fx_symbols,
		res
	] = await ref_data_exchange_symbols__fetch_get(exchange, iex_fetch__params)
	return res.ok ? fx_symbols : null
}
