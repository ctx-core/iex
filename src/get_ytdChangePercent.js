import { iex_fetch } from './iex_fetch';
import { ytdChangePercent_path_ } from './ytd_change_percent_path_';
export function get_ytdChangePercent({ ticker }, opts = {}) {
    return (iex_fetch(ytdChangePercent_path_({ ticker }), opts));
}
export { get_ytdChangePercent as get__ytdChangePercent };
//# sourceMappingURL=src/get_ytdChangePercent.js.map