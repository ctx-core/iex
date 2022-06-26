/**
 * @param {import('./_types').ticker_o_T}params
 * @returns {string}
 * @private
 */
export function peers_path_(params) {
	const { ticker } = params
	return `/stock/${ticker}/peers`
}
export { peers_path_ as _path__peers }
