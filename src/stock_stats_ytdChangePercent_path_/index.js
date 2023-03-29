/**
 * @param {import('../_types').ticker_o_T}ticker_o
 * @returns {string}
 * @private
 */
export function stock_stats_ytdChangePercent_path_(ticker_o) {
	const { ticker } = ticker_o
	return `/stock/${ticker}/stats/ytdChangePercent`
}
export {
	stock_stats_ytdChangePercent_path_ as ytdChangePercent_path_,
	stock_stats_ytdChangePercent_path_ as _path__ytdChangePercent
}
