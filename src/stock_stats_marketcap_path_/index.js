/**
 * @param {import('../_types').ticker_o_T}ticker_o
 * @returns {string}
 * @private
 */
export function stock_stats_marketcap_path_(ticker_o) {
	const { ticker } = ticker_o
	return `/stock/${ticker}/stats/marketcap`
}
export {
	stock_stats_marketcap_path_ as marketcap_path_,
	stock_stats_marketcap_path_ as _marketcap_path,
	stock_stats_marketcap_path_ as _path__marketcap,
}
