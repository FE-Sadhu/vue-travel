export default {
  changeC2 (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
