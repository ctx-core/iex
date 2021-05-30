import type { fx_rate_params_type } from './fx_rate_params_type'
export function fx_rate_path_({ from, to }:fx_rate_params_type) {
	return `/fx/rate/${from}/${to}`
}
export {
	fx_rate_path_ as _fx_rate_path,
	fx_rate_path_ as _path__fx_rate,
}
