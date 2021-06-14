import { get_peRatio } from './get_peRatio';
export async function peRatio_(params, opts = {}) {
    const res = await get_peRatio(params, opts);
    return res.ok && res.json();
}
export { peRatio_ as _peRatio, };
//# sourceMappingURL=src/peRatio_.js.map