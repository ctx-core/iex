import type { quote_params_T } from './quote_params_T.js'
export function ytdChangePercent_path_({ ticker }:quote_params_T):string {
	return `/stock/${ticker}/stats/ytdChangePercent`
}
export {
	ytdChangePercent_path_ as _path__ytdChangePercent
}
