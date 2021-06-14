import { get_ref_data_exchanges } from './get_ref_data_exchanges';
export async function ref_data_exchanges_(opts = {}) {
    const res = await get_ref_data_exchanges(opts);
    return res.ok && res.json();
}
//# sourceMappingURL=src/ref_data_exchanges_.js.map