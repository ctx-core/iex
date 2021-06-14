import { iex_fetch } from './iex_fetch';
import { ref_data_symbols_path_ } from './ref_data_symbols_path_';
export async function get_ref_data_symbols(opts = {}) {
    return (iex_fetch(ref_data_symbols_path_(), opts));
}
export { get_ref_data_symbols as get__ref_data_symbols };
//# sourceMappingURL=src/get_ref_data_symbols.js.map