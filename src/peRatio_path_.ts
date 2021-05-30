import type { quote_params_T } from './quote_params_T'
export function peRatio_path_({ ticker }:quote_params_T) {
	return `/stock/${ticker}/stats/peRatio`
}
export {
	peRatio_path_ as _peRatio_path,
	peRatio_path_ as _path__peRatio,
}
