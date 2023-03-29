/**
 * @param {import('../_types').ticker_o_T}ticker_o
 * @returns {string}
 * @private
 */
export function stock_peers_path_(ticker_o) {
	const { ticker } = ticker_o
	return `/stock/${ticker}/peers`
}
export {
	stock_peers_path_ as peers_path_,
	stock_peers_path_ as _path__peers,
}
