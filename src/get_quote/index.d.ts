import type { Quote } from 'iex-ts-client'
import type { iex_fetch_opts_I, ticker_o_T } from '../_types'
export declare function get_quote(params:ticker_o_T, opts?:iex_fetch_opts_I):Promise<[
	Quote, Response
]>
export { get_quote as get__quote }
