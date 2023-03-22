import type { Company } from 'iex-ts-client'
import type { iex_fetch_opts_T, ticker_o_T } from '../_types'
export declare function stock_company__fetch_get(
	params:ticker_o_T,
	opts?:iex_fetch_opts_T
):Promise<[
	Company,
	Response
]>
export {
	stock_company__fetch_get as stock_company__get,
	stock_company__fetch_get as company__get,
	stock_company__fetch_get as get_company,
}
