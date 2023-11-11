import type { HttpError } from '@ctx-core/error'
import type { USExchange } from 'iex-cloud'
import type { iex_fetch__params_T } from '../_types/index.js'
export declare function ref_data_market_us_exchanges_path_():string
export declare function ref_data_market_us_exchanges__fetch_get(
	iex_fetch__params?:iex_fetch__params_T
):Promise<
	[USExchange[], Response]
	|[HttpError, Response]
>
