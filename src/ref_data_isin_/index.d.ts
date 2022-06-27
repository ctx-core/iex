import { type ISINMapping } from 'iex-cloud'
import type { iex_fetch_opts_I } from '../_types'
import type { ref_data_isin_params_T } from '../ref_data_isin__get'
export declare function ref_data_isin_(
	params:ref_data_isin_params_T, opts?:iex_fetch_opts_I
):Promise<ISINMapping[]|null>
