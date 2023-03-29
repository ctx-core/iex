import type { Quote } from 'iex-ts-client'
import type { iex_fetch__params_T, ticker_o_T } from '../_types'
export declare function stock_quote__fetch_get(
	ticker_o:ticker_o_T,
	iex_fetch__params?:iex_fetch__params_T
):Promise<[
	Quote,
	Response
]>
export {
	stock_quote__fetch_get as quote__get,
	stock_quote__fetch_get as get__quote,
	stock_quote__fetch_get as get_quote,
}
