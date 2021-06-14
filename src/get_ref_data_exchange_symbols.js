import { ref_data_exchange_symbols_path_ } from './ref_data_exchange_symbols_path_';
import { iex_fetch } from './iex_fetch';
export async function get_ref_data_exchange_symbols(params, opts) {
    return (iex_fetch(ref_data_exchange_symbols_path_(params), opts));
}
export { get_ref_data_exchange_symbols as get__ref_data_exchange_symbols };
//# sourceMappingURL=src/get_ref_data_exchange_symbols.js.map