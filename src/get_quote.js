import { iex_fetch } from './iex_fetch';
import { quote_path_ } from './quote_path_';
export function get_quote({ ticker }, opts = {}) {
    return iex_fetch(quote_path_({ ticker }), opts);
}
export { get_quote as get__quote };
//# sourceMappingURL=src/get_quote.js.map