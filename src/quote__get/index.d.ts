import type { Quote } from 'iex-ts-client'
import type { iex_fetch_opts_I, ticker_o_T } from '../_types'
export declare function quote__get(params:ticker_o_T, opts?:iex_fetch_opts_I):Promise<[
	Quote, Response
]>
export {
	quote__get as get__quote,
	quote__get as get_quote,
}
