import { ref_data_exchanges_path_ } from './ref_data_exchanges_path_';
import { iex_fetch } from './iex_fetch';
export async function get_ref_data_exchanges(opts = {}) {
    return (iex_fetch(ref_data_exchanges_path_(), opts));
}
export { get_ref_data_exchanges as get__ref_data_exchanges };
//# sourceMappingURL=src/get_ref_data_exchanges.js.map