import type { quote_params_T } from './quote_params_T.js'
export function quote_path_({ ticker }:quote_params_T):string {
	return `/stock/${ticker}/quote`
}
export {
	quote_path_ as _quote_path,
	quote_path_ as _path__quote,
}
