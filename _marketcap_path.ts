import type { quote_params_type } from './quote_params_type'
export function _marketcap_path({ ticker }:quote_params_type) {
	return `/stock/${ticker}/stats/marketcap`
}
export {
	_marketcap_path as _path__marketcap
}
