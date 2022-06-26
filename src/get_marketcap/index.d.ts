import type { iex_fetch_opts_I, quote_params_T } from '../_types'
export declare function get_marketcap(params:quote_params_T, opts?:iex_fetch_opts_I):Promise<[
	{ marketcap:string }, Response
]>
export { get_marketcap as get__marketcap }
