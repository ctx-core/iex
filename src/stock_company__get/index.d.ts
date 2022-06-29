import type { Company } from 'iex-ts-client'
import type { iex_fetch_opts_I, ticker_o_T } from '../_types'
export declare function stock_company__get(params:ticker_o_T, opts?:iex_fetch_opts_I):Promise<[
	Company, Response
]>
export {
	stock_company__get as company__get,
	stock_company__get as get_company,
}
