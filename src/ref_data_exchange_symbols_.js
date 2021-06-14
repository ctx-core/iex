import { get_ref_data_exchange_symbols } from './get_ref_data_exchange_symbols';
export async function ref_data_exchange_symbols_(params, opts) {
    const res = await get_ref_data_exchange_symbols(params, opts);
    return res.ok && res.json();
}
export { ref_data_exchange_symbols_ as _ref_data_exchange_symbols, };
//# sourceMappingURL=src/ref_data_exchange_symbols_.js.map