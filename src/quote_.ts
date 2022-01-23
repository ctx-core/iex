import type { Quote } from 'iex-ts-client'
import { get_quote } from './get_quote.js'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I.js'
import type { quote_params_T } from './quote_params_T.js'
export async function quote_(params:quote_params_T, opts:iex_fetch_opts_I = {}):Promise<Quote|null> {
	const [quote, res] = await get_quote(params, opts)
	return res.ok ? quote : null
}
export {
	quote_ as _quote,
}
