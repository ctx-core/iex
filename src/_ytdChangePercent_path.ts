import type { quote_params_type } from './quote_params_type'
export function _ytdChangePercent_path({ ticker }:quote_params_type) {
	return `/stock/${ticker}/stats/ytdChangePercent`
}
export {
	_ytdChangePercent_path as _path__ytdChangePercent
}
