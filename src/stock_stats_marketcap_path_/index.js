/**
 * @param {import('../_types').ticker_o_T}params
 * @returns {string}
 * @private
 */
export function stock_stats_marketcap_path_(params) {
	const { ticker } = params
	return `/stock/${ticker}/stats/marketcap`
}
export {
	stock_stats_marketcap_path_ as marketcap_path_,
	stock_stats_marketcap_path_ as _marketcap_path,
	stock_stats_marketcap_path_ as _path__marketcap,
}
