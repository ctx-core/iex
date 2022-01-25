import type { Quote } from 'iex-ts-client'
import type { iex_fetch_opts_I, quote_params_T } from './_types'
export declare function quote_(params:quote_params_T, opts?:iex_fetch_opts_I):Promise<Quote|null>;
export { quote_ as _quote, }
