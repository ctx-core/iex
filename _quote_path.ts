import type { quote_params_type } from './quote_params_type'
export function _quote_path({ ticker }:quote_params_type) {
	return `/stock/${ticker}/quote`
}
export {
	_quote_path as _path__quote
}
