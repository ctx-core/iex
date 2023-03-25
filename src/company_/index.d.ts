import type { Company } from 'iex-cloud'
import type { iex_fetch__params_T, ticker_o_T } from '../_types'
export declare function company_(
	params:ticker_o_T,
	opts?:iex_fetch__params_T
):Promise<Company>
export {
	company_ as stock_company_,
}
