<template>
  <aside
    class="section menu-container"
    :class="{
      menuHover: menuFocus,
      menuTop: navbarPos
    }"
    @mouseenter="$store.commit('openMenu', true)"
    @mouseleave="$store.commit('openMenu', false)"
  >
    <div class="menu-label">
      <span class="menu-label-span">Mr. Smith</span><br />
      <span class="menu-label-company">
        BMSMA Company & Delivery
      </span>
    </div>
    <ul class="menu-list">
      <li>
        <a class="disabled">
          <i class="material-icons home">&#xe5d2;</i>
          <p class="menu-item-p">Menu</p>
        </a>
      </li>
      <li>
        <nuxt-link to="/" exact-active-class="is-active">
          <i class="material-icons dashboard">&#xe871;</i>
          <p class="menu-item-p">Dashboard</p>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/formsTable" exact-active-class="is-active">
          <i class="material-icons directions_boat">&#xe532;</i>
          <p class="menu-item-p">Forms & Table</p>
        </nuxt-link>
      </li>
      <li>
        <a @click="cancel">
          <i class="material-icons refresh">&#xe5d5;</i>
          <p class="menu-item-p">Cancel</p>
        </a>
      </li>
      <li>
        <a @click="save">
          <i class="material-icons save">&#xe161;</i>
          <p class="menu-item-p">Save</p>
        </a>
      </li>
      <li>
        <a>
          <i class="material-icons info">&#xe88e;</i>
          <p class="menu-item-p">Information</p>
        </a>
      </li>
      <li>
        <a @click="showDocument">
          <i class="material-icons description">&#xe873;</i>
          <p class="menu-item-p">See the Document</p>
        </a>
      </li>
      <li>
        <a @click="changeNavbar">
          <i class="material-icons swap_vert">&#xe8d5;</i>
          <p v-if="navbarPos" class="menu-item-p">Navbar Bottom</p>
          <p v-else>Navbar Top</p>
        </a>
      </li>
      <li>
        <a @click="logout">
          <i class="material-icons settings_power">&#xe8c6;</i>
          <p class="menu-item-p">Exit</p>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  data: () => ({
    items: [
      {
        title: 'Home',
        icon: 'menu',
        hex: '&#xe5d2;',
        to: { name: 'index' }
      },
      {
        title: 'Forms Table',
        icon: 'local_shipping',
        hex: '&#xe558;',
        to: { name: 'formsTable' }
      }
    ]
  }),

  computed: {
    menuFocus() {
      return this.$store.state.menuFocus
    },

    isDocVisible() {
      return this.$store.state.isDocVisible
    },

    navbarPos() {
      return this.$store.state.navbarPos
    }
  },

  beforeMount() {
    const lsNavbarPos = localStorage.getItem('navbarPos')
    if (lsNavbarPos === 'true' || lsNavbarPos === 'false') {
      this.$store.dispatch('navbarPos', lsNavbarPos)
    }
  },

  methods: {
    save() {
      this.$buefy.dialog.confirm({
        cancelText: 'Cancel',
        confirmText: 'Save',
        type: 'is-warning',
        hasIcon: true,
        message: 'All data will be saved',
        onConfirm: () => this.$buefy.toast.open('Saved.')
      })
    },

    cancel() {
      this.$buefy.dialog.confirm({
        cancelText: 'Cancel',
        confirmText: 'Confirm',
        type: 'is-warning',
        hasIcon: true,
        message: 'All data will be erased',
        onConfirm: () => this.$buefy.toast.open('Cancelled.')
      })
    },

    showDocument() {
      this.$store.dispatch('showDocument', !this.isDocVisible)
    },

    changeNavbar() {
      const lsNavbarPos = localStorage.getItem('navbarPos')
      if (!lsNavbarPos) localStorage.setItem('navbarPos', !this.navbarPos)
      else localStorage.navbarPos = !this.navbarPos
      this.$store.dispatch('navbarPos', !this.navbarPos)
    },

    logout() {
      const auth = {
        token: '',
        loggedIn: false
      }
      // Code will also be required to invalidate the JWT Cookie on external API
      Cookie.remove('auth')
      this.$store.dispatch('logout', auth)
    }
  }
}
</script>
