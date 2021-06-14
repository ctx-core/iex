import { fetch } from '@ctx-core/fetch';
import { iex_fetch_arg_a_ } from './iex_fetch_arg_a_';
export async function iex_fetch(path, in_opts = {}) {
    const [url, opts] = iex_fetch_arg_a_(path, in_opts);
    return fetch(url, opts);
}
export { iex_fetch as fetch__iex };
//# sourceMappingURL=src/iex_fetch.js.map