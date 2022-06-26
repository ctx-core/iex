import type { iex_fetch_opts_I, quote_params_T } from '../_types'
export declare function get_ytdChangePercent(
	params:quote_params_T, opts?:iex_fetch_opts_I
):Promise<[
	{ ytdChangePercent:number }, Response
]>
export { get_ytdChangePercent as get__ytdChangePercent }
