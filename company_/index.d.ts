import type { Company } from 'iex-cloud'
import type { iex_fetch__params_T } from '../_types/index.js'
export declare function company_(
	ticker:string,
	iex_fetch__params?:iex_fetch__params_T
):Promise<Company>
export {
	company_ as stock_company_,
}
