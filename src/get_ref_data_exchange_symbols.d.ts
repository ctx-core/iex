import type { iex_fetch_opts_I } from './iex_fetch_opts_I';
export declare function get_ref_data_exchange_symbols(params: get_ref_data_exchange_symbols_opts_T, opts: iex_fetch_opts_I): Promise<Response>;
export { get_ref_data_exchange_symbols as get__ref_data_exchange_symbols };
export interface get_ref_data_exchange_symbols_opts_T {
    exchange: string;
}
