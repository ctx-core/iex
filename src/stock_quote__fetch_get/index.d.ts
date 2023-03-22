import type { Quote } from 'iex-ts-client'
import type { iex_fetch_opts_T, ticker_o_T } from '../_types'
export declare function stock_quote__fetch_get(
	params:ticker_o_T,
	opts?:iex_fetch_opts_T
):Promise<[
	Quote,
	Response
]>
export {
	stock_quote__fetch_get as quote__get,
	stock_quote__fetch_get as get__quote,
	stock_quote__fetch_get as get_quote,
}
