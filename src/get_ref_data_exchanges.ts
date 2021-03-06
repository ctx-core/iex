import { ref_data_exchanges_path_ } from './ref_data_exchanges_path_'
import { iex_fetch } from './iex_fetch'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I'
export async function get_ref_data_exchanges(opts:iex_fetch_opts_I = {}) {
	return (
		iex_fetch(
			ref_data_exchanges_path_(),
			opts)
	)
}
export {
	get_ref_data_exchanges as get__ref_data_exchanges
}
