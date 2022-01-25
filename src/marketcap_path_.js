/**
 * @param {import('./_types').quote_params_T}params
 * @returns {string}
 * @private
 */
export function marketcap_path_(params) {
	const { ticker } = params
	return `/stock/${ticker}/stats/marketcap`
}
export { marketcap_path_ as _marketcap_path, marketcap_path_ as _path__marketcap, }
