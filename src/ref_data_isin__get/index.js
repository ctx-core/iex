import { iex_fetch } from '../iex_fetch/index.js'
import { ref_data_exchanges_path_ } from '../ref_data_exchanges_path_/index.js'
/**
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<[import('iex-cloud').ISINMapping[], Response]>}
 * @private
 */
export async function ref_data_exchanges__get(opts = {}) {
	return iex_fetch(ref_data_exchanges_path_(), opts)
}
export {
	ref_data_exchanges__get as get__ref_data_exchanges,
	ref_data_exchanges__get as get_ref_data_exchanges,
}
