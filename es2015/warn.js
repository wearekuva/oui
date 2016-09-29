export default (condition, message) => {
  if (condition) {
    if (typeof console !== 'undefined') {
      console.warn('Warning: ' + message)
    }
  }
}
