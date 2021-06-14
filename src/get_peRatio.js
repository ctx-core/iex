import { iex_fetch } from './iex_fetch';
import { peRatio_path_ } from './peRatio_path_';
export function get_peRatio({ ticker }, opts = {}) {
    return (iex_fetch(peRatio_path_({ ticker }), opts));
}
export { get_peRatio as get__peRatio };
//# sourceMappingURL=src/get_peRatio.js.map