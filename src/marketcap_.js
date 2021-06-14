import { get_marketcap } from './get_marketcap';
export async function marketcap_(params, opts = {}) {
    const res = await get_marketcap(params, opts);
    return res.ok && res.json();
}
export { marketcap_ as _marketcap, };
//# sourceMappingURL=src/marketcap_.js.map