/**
 * @param {import('./_types').quote_params_T}params
 * @returns {string}
 * @private
 */
export function ytdChangePercent_path_(params) {
	const { ticker } = params
	return `/stock/${ticker}/stats/ytdChangePercent`
}
export { ytdChangePercent_path_ as _path__ytdChangePercent }
