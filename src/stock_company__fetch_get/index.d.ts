import type { HttpError } from '@ctx-core/error'
import type { Company } from 'iex-ts-client'
import type { iex_fetch__params_T, ticker_o_T } from '../_types'
export declare function stock_company__fetch_get(
	ticker_o:ticker_o_T,
	iex_fetch__params?:iex_fetch__params_T
):Promise<
	[Company, Response]
	|[HttpError, Response]
>
export {
	stock_company__fetch_get as stock_company__get,
	stock_company__fetch_get as company__get,
	stock_company__fetch_get as get_company,
}
