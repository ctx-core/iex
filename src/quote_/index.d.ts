import type { Quote } from 'iex-ts-client'
import type { iex_fetch__params_T, ticker_o_T } from '../_types'
export declare function quote_(
	ticker_o:ticker_o_T,
	iex_fetch__params?:iex_fetch__params_T
):Promise<Quote|null>
export {
	quote_ as stock_quote_,
	quote_ as _quote,
}
