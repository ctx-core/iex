import { type ISINMapping } from 'iex-cloud'
import type { iex_fetch__params_T } from '../_types'
import type { isin_mapping__params_T } from '../isin_mapping__fetch_get'
export declare function isin_mapping_(
	params:isin_mapping__params_T,
	opts?:iex_fetch__params_T
):Promise<ISINMapping[]|null>
export {
	isin_mapping_ as ref_data_isin_,
}
