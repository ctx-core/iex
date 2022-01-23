import { fetch } from '@ctx-core/fetch-undici'
import { iex_fetch_arg_a_ } from './iex_fetch_arg_a_.js'
import type { iex_fetch_opts_I } from './iex_fetch_opts_I.js'
export async function iex_fetch<T>(path:string, in_opts:iex_fetch_opts_I = {}):Promise<[T, Response]> {
	const [url, opts] = iex_fetch_arg_a_(path, in_opts)
	const res = await fetch(url, opts)
	return [await res.json(), res]
}
export {
	iex_fetch as fetch__iex
}
