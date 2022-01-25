import type { fx_rate_params_type, iex_fetch_opts_I } from './_types'
export declare function get_fx_rate(params:fx_rate_params_type, opts?:iex_fetch_opts_I):Promise<[
	{ rate:number }, Response
]>;
export { get_fx_rate as get__fx_rate }
