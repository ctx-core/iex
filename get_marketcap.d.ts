import type { quote_params_type } from './quote_params_type';
import type { iex_fetch_opts_type } from './iex_fetch_opts_type';
export declare function get_marketcap({ ticker }: quote_params_type, opts?: iex_fetch_opts_type): Promise<any>;
export { get_marketcap as get__marketcap };
