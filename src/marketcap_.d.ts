import type { iex_fetch_opts_I, quote_params_T } from './_types'
export declare function marketcap_(
	params:quote_params_T, opts?:iex_fetch_opts_I
):Promise<string|null>
export { marketcap_ as _marketcap, }