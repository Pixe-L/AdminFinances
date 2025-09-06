export const formatMoney = ($$$) => {
    return Number($$$).toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN'
    });
}