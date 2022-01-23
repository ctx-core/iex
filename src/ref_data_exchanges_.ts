import { get_ref_data_exchanges } from './get_ref_data_exchanges.js'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I.js'
export async function ref_data_exchanges_(opts:iex_fetch_opts_I = {}):Promise<string[]|null> {
	const [ref_data_exchanges, res] = await get_ref_data_exchanges(opts)
	return res.ok ? ref_data_exchanges : null
}
