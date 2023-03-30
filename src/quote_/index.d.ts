import type { Quote } from 'iex-ts-client'
import type { iex_fetch__params_T } from '../_types'
export declare function quote_(
	ticker:string,
	iex_fetch__params?:iex_fetch__params_T
):Promise<Quote|null>
