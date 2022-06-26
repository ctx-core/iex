import { iex_fetch } from '../iex_fetch/index.js'
import { ref_data_exchanges_path_ } from '../ref_data_exchanges_path_/index.js'
/**
 * @param {import('./_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<[string[], Response]>}
 * @private
 */
export async function get_ref_data_exchanges(opts = {}) {
	return iex_fetch(ref_data_exchanges_path_(), opts)
}
export { get_ref_data_exchanges as get__ref_data_exchanges }
