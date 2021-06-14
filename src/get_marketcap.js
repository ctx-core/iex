import { marketcap_path_ } from './marketcap_path_';
import { iex_fetch } from './iex_fetch';
export function get_marketcap({ ticker }, opts = {}) {
    return (iex_fetch(marketcap_path_({ ticker }), opts));
}
export { get_marketcap as get__marketcap };
//# sourceMappingURL=src/get_marketcap.js.map