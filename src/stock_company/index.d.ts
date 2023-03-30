import type { HttpError } from '@ctx-core/error'
import type { Company } from 'iex-ts-client'
import type { iex_fetch__params_T } from '../_types'
export declare function stock_company_path_(ticker:string):string
export declare function stock_company__fetch_get(
	ticker:string,
	iex_fetch__params?:iex_fetch__params_T
):Promise<
	[Company, Response]
	|[HttpError, Response]
>
