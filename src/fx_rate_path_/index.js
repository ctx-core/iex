/**
 * @param {import('../_types').fx_rate__params_T}params
 * @returns {string}
 * @private
 */
export function fx_rate_path_(params) {
	const { from, to } = params
	return `/fx/rate/${from}/${to}`
}
export {
	fx_rate_path_ as _fx_rate_path,
	fx_rate_path_ as _path__fx_rate,
}
