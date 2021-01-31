import type { fx_rate_params_type } from './fx_rate_params_type';
import type { iex_fetch_opts_type } from './iex_fetch_opts_type';
export declare function get_fx_rate({ from, to }: fx_rate_params_type, opts?: iex_fetch_opts_type): Promise<any>;
export { get_fx_rate as get__fx_rate };
