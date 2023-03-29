import type { iex_fetch__params_T, ticker_o_T } from '../_types'
export declare function stock_peers_(
	ticker_o:ticker_o_T,
	iex_fetch__params?:iex_fetch__params_T
):Promise<string[]|null>
export { stock_peers_ as peers_ }
