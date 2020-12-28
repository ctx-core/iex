import type { quote_params_type } from './quote_params_type';
import type { iex_fetch_opts_type } from './iex_fetch_opts_type';
export declare function get_quote({ ticker }: quote_params_type, opts?: iex_fetch_opts_type): Promise<any>;
export { get_quote as get__quote };
