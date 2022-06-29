/**
 * @param {import('../_types').ticker_o_T}params
 * @returns {string}
 * @private
 */
export function stock_stats_ytdChangePercent_path_(params) {
	const { ticker } = params
	return `/stock/${ticker}/stats/ytdChangePercent`
}
export {
	stock_stats_ytdChangePercent_path_ as ytdChangePercent_path_,
	stock_stats_ytdChangePercent_path_ as _path__ytdChangePercent
}
