import type { iex_fetch_opts_I, ticker_o_T } from '../_types'
export declare function stock_peers_(params:ticker_o_T, opts?:iex_fetch_opts_I):Promise<string[]|null>
export { stock_peers_ as peers_}