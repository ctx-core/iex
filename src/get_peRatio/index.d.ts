import type { iex_fetch_opts_I, ticker_o_T } from '../_types'
export declare function get_peRatio(params:ticker_o_T, opts?:iex_fetch_opts_I):Promise<[
	{ peRatio:number }, Response
]>
export { get_peRatio as get__peRatio }
