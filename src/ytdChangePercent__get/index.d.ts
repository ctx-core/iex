import type { iex_fetch_opts_I, ticker_o_T } from '../_types'
export declare function ytdChangePercent__get(
	params:ticker_o_T, opts?:iex_fetch_opts_I
):Promise<[
	{ ytdChangePercent:number }, Response
]>
export {
	ytdChangePercent__get as get__ytdChangePercent,
	ytdChangePercent__get as get_ytdChangePercent,
}
