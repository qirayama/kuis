export function formatRupiah(number) {
    if (typeof number !== 'number') {
        return 'Invalid';
    }

    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(number);
}