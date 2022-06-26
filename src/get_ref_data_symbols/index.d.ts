import type { FXSymbols } from 'iex-cloud'
import type { iex_fetch_opts_I } from '../_types'
export declare function get_ref_data_symbols(
	opts?:iex_fetch_opts_I
):Promise<[FXSymbols, Response]>;
export { get_ref_data_symbols as get__ref_data_symbols }
