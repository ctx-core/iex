import type { quote_params_T } from './quote_params_T'
export function ytdChangePercent_path_({ ticker }:quote_params_T) {
	return `/stock/${ticker}/stats/ytdChangePercent`
}
export {
	ytdChangePercent_path_ as _path__ytdChangePercent
}
