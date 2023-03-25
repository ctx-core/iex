import type { iex_fetch__params_T, ticker_o_T } from '../_types'
export declare function stock_peers__fetch_get(
	params:ticker_o_T,
	opts:iex_fetch__params_T
):Promise<[
	string[],
	Response
]>
export {
	stock_peers__fetch_get as stock_peers__get,
	stock_peers__fetch_get as peers__get,
	stock_peers__fetch_get as get__peers,
	stock_peers__fetch_get as get_peers,
}
