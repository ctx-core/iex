import type { KeyStat } from 'iex-cloud'
import type { iex_fetch__params_T } from '../_types'
export declare function key_stat_(
	ticker:string,
	iex_fetch__params?:iex_fetch__params_T
):Promise<KeyStat|null>
export {
	key_stat_ as stock_stats_,
}
