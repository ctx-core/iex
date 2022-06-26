/**
 * @param {import('./_types').quote_params_T}params
 * @returns {string}
 * @private
 */
export function quote_path_(params) {
	const { ticker } = params
	return `/stock/${ticker}/quote`
}
export { quote_path_ as _quote_path, quote_path_ as _path__quote, }
