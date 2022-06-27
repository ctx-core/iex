import type { iex_fetch_opts_I, ticker_o_T } from '../_types'
export declare function marketcap__get(params:ticker_o_T, opts?:iex_fetch_opts_I):Promise<[
	{ marketcap:string }, Response
]>
export {
	marketcap__get as get__marketcap,
	marketcap__get as get_marketcap
}
