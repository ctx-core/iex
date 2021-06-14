import { get_ref_data_symbols } from './get_ref_data_symbols';
export async function ref_data_symbols_(opts = {}) {
    const res = await get_ref_data_symbols(opts);
    return res.ok && res.json();
}
//# sourceMappingURL=src/ref_data_symbols_.js.map