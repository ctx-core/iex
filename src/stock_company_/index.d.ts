import type { Company } from 'iex-cloud'
import type { iex_fetch_opts_I, ticker_o_T } from '../_types'
export declare function stock_company_(params:ticker_o_T, opts?:iex_fetch_opts_I):Promise<Company>
export { stock_company_ as company_ }