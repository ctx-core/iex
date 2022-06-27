import type { Company } from 'iex-cloud'
import type { iex_fetch_opts_I, ticker_o_T } from '../_types'
export declare function company__get(params:ticker_o_T, opts?:iex_fetch_opts_I):Promise<[
	Company, Response
]>
export { company__get as get_company }
