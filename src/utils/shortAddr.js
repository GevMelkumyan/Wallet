/**
 * @param {string} address
 */
export function shortAddr(address, startLength = 6, endLength = 4) {
  return (
    address.slice(0, startLength) +
    "..." +
    address.slice(address.length - endLength)
  );
}
