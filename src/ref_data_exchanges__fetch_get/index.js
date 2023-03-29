import { iex_fetch } from '../iex_fetch/index.js'
import { ref_data_exchanges_path_ } from '../ref_data_exchanges_path_/index.js'
/** @typedef {import('iex-cloud').InternationalExchange}InternationalExchange */
/** @typedef {import('iex-cloud').USExchange}USExchange */
/**
 * @param {import('../_types').iex_fetch__params_T}[iex_fetch__params]
 * @returns {(InternationalExchange|USExchange)[], Response]>}
 * @private
 */
export async function ref_data_exchanges__fetch_get(
	iex_fetch__params = {}
) {
	return iex_fetch(ref_data_exchanges_path_(), iex_fetch__params)
}
export {
	ref_data_exchanges__fetch_get as ref_data_exchanges__get,
	ref_data_exchanges__fetch_get as get__ref_data_exchanges,
	ref_data_exchanges__fetch_get as get_ref_data_exchanges,
}
