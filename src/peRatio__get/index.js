import { iex_fetch } from '../iex_fetch/index.js'
import { peRatio_path_ } from '../peRatio_path_/index.js'
/**
 * @param {import('../_types').ticker_o_T}params
 * @param {import('../_types').iex_fetch_opts_I}[opts]
 * @returns {Promise<[{ peRatio:number }, Response]>}
 * @private
 */
export function peRatio__get(params, opts = {}) {
	return iex_fetch(peRatio_path_(params), opts)
}
export {
	peRatio__get as get__peRatio,
	peRatio__get as get_peRatio,
}
