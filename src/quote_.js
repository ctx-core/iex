import { get_quote } from './get_quote';
export async function quote_(params, opts = {}) {
    const res = await get_quote(params, opts);
    return res.ok && res.json();
}
export { quote_ as _quote, };
//# sourceMappingURL=src/quote_.js.map