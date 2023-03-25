import type { Quote } from 'iex-ts-client'
import type { iex_fetch__params_T, ticker_o_T } from '../_types'
export declare function quote_(
	params:ticker_o_T,
	opts?:iex_fetch__params_T
):Promise<Quote|null>
export {
	quote_ as stock_quote_,
	quote_ as _quote,
}
