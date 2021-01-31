import type { iex_fetch_opts_type } from './iex_fetch_opts_type';
export declare function get_ref_data_exchange_symbols(params: get_ref_data_exchange_symbols_opts_type, opts: iex_fetch_opts_type): Promise<any>;
export { get_ref_data_exchange_symbols as get__ref_data_exchange_symbols };
export interface get_ref_data_exchange_symbols_opts_type {
    exchange: string;
}
