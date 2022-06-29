/**
 * @param {import('../_types').ticker_o_T}params
 * @returns {string}
 * @private
 */
export function stock_stats_peRatio_path_(params) {
	const { ticker } = params
	return `/stock/${ticker}/stats/peRatio`
}
export {
	stock_stats_peRatio_path_ as peRatio_path_,
	stock_stats_peRatio_path_ as _peRatio_path,
	stock_stats_peRatio_path_ as _path__peRatio,
}
