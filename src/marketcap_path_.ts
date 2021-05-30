import type { quote_params_T } from './quote_params_T'
export function marketcap_path_({ ticker }:quote_params_T) {
	return `/stock/${ticker}/stats/marketcap`
}
export {
	marketcap_path_ as _marketcap_path,
	marketcap_path_ as _path__marketcap,
}
