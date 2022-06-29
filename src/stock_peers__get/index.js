import { iex_fetch } from '../iex_fetch/index.js'
import { stock_peers_path_ } from '../stock_peers_path_/index.js'
/**
 * @param {import('../_types').peers_params_T} params
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<[string[], Response]>}
 * @private
 */
export function stock_peers__get(params, opts = {}) {
	return iex_fetch(stock_peers_path_(params), opts)
}
export {
	stock_peers__get as peers__get,
	stock_peers__get as get__peers,
	stock_peers__get as get_peers,
}
