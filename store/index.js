// import axios from 'axios'
const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({
  auth: {
    token: '',
    loggedIn: false
  },
  menuFocus: false,
  isDocVisible: false,
  colorPalette: 'default',
  navbarPos: false
})

export const mutations = {
  setAuth(state, auth) {
    state.auth = auth
  },
  openMenu(state, bool) {
    if (state.menuFocus !== bool) state.menuFocus = bool
  },
  changeDocVisible(state, bool) {
    state.isDocVisible = bool
  },
  changeColorPalette(state, name) {
    state.isDocVisible = name
  },
  changeNavBar(state, pos) {
    state.navbarPos = pos
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.auth)
      } catch (err) {
        this.$router.replace('/login')
      }
    }
    commit('setAuth', auth)
  },

  logout({ commit }, login) {
    commit('setAuth', login)
  },

  getToken({ commit }, [userName, password]) {
    const Cookie = process.client ? require('js-cookie') : undefined
    /* When API Call
      const { loginRes } = await axios.post(
      `${process.env.BASE_API}Account/Login?userName=${userName}&password=${password}`,
      {
        Authorization: 'basic YWxpYmVya2JhdHVyOjEyMzQ1Ng==',
        Origins: 'plainadmin.com'
      }
    )
    alert(loginRes)
    */
    if (userName === 'admin' && password === 'admin') {
      const auth = {
        token: 'token',
        loggedIn: true
      }
      Cookie.set('auth', auth)
      commit('setAuth', auth)
      this.$router.replace('/')
    }
  },

  showDocument({ commit }, bool) {
    commit('changeDocVisible', bool)
  },

  colorPalette({ commit }, number) {
    commit('changeColorPalette', number)
  },

  navbarPos({ commit }, pos) {
    commit('changeNavBar', pos)
  }
}
