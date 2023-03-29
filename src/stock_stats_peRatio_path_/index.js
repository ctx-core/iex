/**
 * @param {import('../_types').ticker_o_T}ticker_o
 * @returns {string}
 * @private
 */
export function stock_stats_peRatio_path_(ticker_o) {
	const { ticker } = ticker_o
	return `/stock/${ticker}/stats/peRatio`
}
export {
	stock_stats_peRatio_path_ as peRatio_path_,
	stock_stats_peRatio_path_ as _peRatio_path,
	stock_stats_peRatio_path_ as _path__peRatio,
}
