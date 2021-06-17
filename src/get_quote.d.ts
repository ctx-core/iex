import type { quote_params_T } from './quote_params_T';
import type { iex_fetch_opts_I } from './iex_fetch_opts_I';
export declare function get_quote({ ticker }: quote_params_T, opts?: iex_fetch_opts_I): Promise<Response>;
export { get_quote as get__quote };