export function formatPrice(cents) {
    return `$${(cents).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  }