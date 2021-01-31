import type { quote_params_type } from './quote_params_type'
export function _peRatio_path({ ticker }:quote_params_type) {
	return `/stock/${ticker}/stats/peRatio`
}
export {
	_peRatio_path as _path__peRatio
}
