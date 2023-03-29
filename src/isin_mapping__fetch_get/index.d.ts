import { type ISINMapping } from 'iex-cloud'
import type { iex_fetch__params_T } from '../_types'
export declare function isin_mapping__fetch_get(
	isin_mapping__params:isin_mapping__params_T,
	iex_fetch__params?:iex_fetch__params_T
):Promise<[
	ISINMapping[],
	Response
]>
export {
	isin_mapping__fetch_get as ref_data_isin__get,
	isin_mapping__fetch_get as get_ref_data_isin,
}
export interface isin_mapping__params_T {
	isin:string
}
export type isin_mapping_params_T = isin_mapping__params_T
export type ref_data_isin_params_T = isin_mapping__params_T
