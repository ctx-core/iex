import { safe_fetch as fetch } from '@ctx-core/fetch-undici'
import { iex_fetch_arg_a_ } from './iex_fetch_arg_a_.js'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I.js'
export async function iex_fetch(path:string, in_opts:iex_fetch_opts_I = {}):Promise<Response> {
	const [url, opts] = iex_fetch_arg_a_(path, in_opts)
	return fetch(url, opts)
}
export {
	iex_fetch as fetch__iex
}
