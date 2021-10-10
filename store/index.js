export const state = () => ({
  headerHeight: 0,
  subNavIndex: 0,
  locales: ['en', 'fr'],
  locale: 'en'
})


export const mutations = {
  setHeaderHeight(state, height) {
    state.headerHeight = height
  },
  setSubNavIndex(state, index) {
    state.subNavIndex = index
  },
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  }
}

export const actions = {
  // nuxtServerInit(a, b) {
  //   console.log(b)
  // }
}

