import { type ISINMapping } from 'iex-cloud'
import type { iex_fetch__params_T } from '../_types'
export declare function isin_mapping_(
	isin:string,
	iex_fetch__params?:iex_fetch__params_T
):Promise<ISINMapping[]|null>
export {
	isin_mapping_ as ref_data_isin_,
}
