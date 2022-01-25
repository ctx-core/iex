import type { iex_fetch_opts_I } from './_types'
export declare function iex_fetch<T>(
	path:string, in_opts?:iex_fetch_opts_I
):Promise<[T, Response]>;
export { iex_fetch as fetch__iex }
