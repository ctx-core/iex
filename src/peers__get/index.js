import { iex_fetch } from '../iex_fetch/index.js'
import { peers_path_ } from '../peers_path_/index.js'
/**
 * @param {import('../_types').peers_params_T} params
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<[string[], Response]>}
 * @private
 */
export function peers__get(params, opts = {}) {
	return iex_fetch(peers_path_(params), opts)
}
export {
	peers__get as get__peers,
	peers__get as get_peers,
}
