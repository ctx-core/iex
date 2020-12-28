import type { fx_rate_params_type } from './fx_rate_params_type'
export function _fx_rate_path({ from, to }:fx_rate_params_type) {
	return `/fx/rate/${from}/${to}`
}
export {
	_fx_rate_path as _path__fx_rate
}
