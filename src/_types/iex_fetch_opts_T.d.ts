import { type query_T } from '@ctx-core/uri'
export interface iex_fetch_opts_T {
	IEX_HOST?:string
	IEX_PUBLIC_KEY?:string
	IEX_SECRET_KEY?:string
	headers?:any
	query?:query_T
}
export type iex_fetch_opts_I = iex_fetch_opts_T
