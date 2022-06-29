import type { Quote } from 'iex-ts-client'
import type { iex_fetch_opts_I, ticker_o_T } from '../_types'
export declare function stock_quote_(params:ticker_o_T, opts?:iex_fetch_opts_I):Promise<Quote|null>
export {
	stock_quote_ as quote_,
	stock_quote_ as _quote,
}
