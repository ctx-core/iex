import type { iex_fetch_opts_I, IEXRefDataSymbol } from '../_types'
export declare function get_ref_data_symbols(
	opts?:iex_fetch_opts_I
):Promise<[IEXRefDataSymbol[], Response]>;
export { get_ref_data_symbols as get__ref_data_symbols }
