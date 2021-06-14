import { get_fx_rate } from './get_fx_rate';
export async function fx_rate_(params, opts = {}) {
    const { from, to } = params;
    if (!from)
        return;
    if (from === to)
        return 1.0;
    const res = await get_fx_rate(params, opts);
    const json = await res.json();
    return json.rate;
}
export { fx_rate_ as _fx_rate, };
//# sourceMappingURL=src/fx_rate_.js.map