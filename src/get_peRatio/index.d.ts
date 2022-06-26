import type { iex_fetch_opts_I, quote_params_T } from '../_types'
export declare function get_peRatio(params:quote_params_T, opts?:iex_fetch_opts_I):Promise<[
	{ peRatio:number }, Response
]>
export { get_peRatio as get__peRatio }
