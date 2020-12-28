import { fetch } from '@ctx-core/fetch'
import { _iex_fetch_arg_a1 } from './_iex_fetch_arg_a1'
import type { iex_fetch_opts_type } from './iex_fetch_opts_type'
export async function iex_fetch(path:string, opts:iex_fetch_opts_type = {}) {
	return fetch(..._iex_fetch_arg_a1(path, opts))
}
export {
	iex_fetch as fetch__iex
}
