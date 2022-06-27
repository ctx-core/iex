import { type ISINMapping } from 'iex-cloud'
import type { iex_fetch_opts_I } from '../_types'
export declare function ref_data_isin__get(
	params:ref_data_isin_params_T, opts?:iex_fetch_opts_I
):Promise<[ISINMapping[], Response]>;
export interface ref_data_isin_params_T {
	isin:number
}
export {
	ref_data_isin__get as get_ref_data_isin,
}
