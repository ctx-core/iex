import { iex__fetch_get } from '../iex__fetch_get/index.js'
import { stock_peers_path_ } from '../stock_peers_path_/index.js'
/** @typedef {import('@ctx-core/error').HttpError}HttpError */
/**
 * @param {import('../_types').peers_params_T} ticker_o
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {Promise<[string[], Response]|[HttpError, Response]>}
 * @private
 */
export function stock_peers__fetch_get(
	ticker_o,
	iex_fetch__params = {}
) {
	return iex__fetch_get(stock_peers_path_(ticker_o), iex_fetch__params)
}
export {
	stock_peers__fetch_get as stock_peers__get,
	stock_peers__fetch_get as peers__get,
	stock_peers__fetch_get as get__peers,
	stock_peers__fetch_get as get_peers,
}
