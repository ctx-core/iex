import type { HttpError } from '@ctx-core/error'
import { type ISINMapping } from 'iex-cloud'
import type { iex_fetch__params_T } from '../_types'
export declare function ref_data_isin_path_():string
export declare function ref_data_isin__fetch_get(
	isin:string,
	iex_fetch__params?:iex_fetch__params_T
):Promise<
	[ISINMapping[], Response]
	|[HttpError, Response]
>
export {
	ref_data_isin__fetch_get as isin_mapping__fetch_get,
}
