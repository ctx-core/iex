import { get_ytdChangePercent } from './get_ytdChangePercent';
export async function ytdChangePercent_(params, opts = {}) {
    const res = await get_ytdChangePercent(params, opts);
    return res.ok && res.json();
}
//# sourceMappingURL=src/ytd_change_percent_.js.map