import { iex_fetch } from '../iex_fetch/index.js'
import { ref_data_isin_path_ } from '../ref_data_isin_path_/index.js'
import { clone } from '@ctx-core/object'
/**
 * @param {import('./index.d.ts').ref_data_isin_params_T}[params]
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<[import('iex-cloud').ISINMapping[], Response]>}
 * @private
 */
export async function ref_data_isin__get(params, opts) {
	return iex_fetch(ref_data_isin_path_(), clone(opts, {
		query: { isin: params.isin }
	}))
}
export {
	ref_data_isin__get as get_ref_data_isin,
}
