import { iex_fetch } from './iex_fetch';
import { fx_rate_path_ } from './fx_rate_path_';
export function get_fx_rate({ from, to }, opts = {}) {
    return (iex_fetch(fx_rate_path_({ from, to }), opts));
}
export { get_fx_rate as get__fx_rate };
//# sourceMappingURL=src/get_fx_rate.js.map