/**
 * @param {import('./_types').quote_params_T}params
 * @returns {string}
 * @private
 */
export function peRatio_path_(params) {
	const { ticker } = params
	return `/stock/${ticker}/stats/peRatio`
}
export { peRatio_path_ as _peRatio_path, peRatio_path_ as _path__peRatio, }
