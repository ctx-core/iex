import type { fx_rate_params_T, iex_fetch_opts_I } from '../_types'
export declare function fx_rate__get(params:fx_rate_params_T, opts?:iex_fetch_opts_I):Promise<[
	{ rate:number }, Response
]>
export {
	fx_rate__get as get__fx_rate,
	fx_rate__get as get_fx_rate,
}
