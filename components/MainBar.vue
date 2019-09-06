<template>
  <nav
    class="navbar header has-shadow is-primary"
    :class="{ navbarTop: navbarPos }"
  >
    <section class="main-bar">
      <div class="logo-container">
        <h1 class="navbar-item logo" href="/">Plain</h1>
      </div>

      <div class="columns">
        <div class="column nav-list">
          <div class="main-pages highlightTextIn">
            <a
              v-if="routeName === '/'"
              v-scroll-to="'#bar-chart'"
              alt="Bar Chart"
              class="cursor-scroll"
            >
              Bar Chart
            </a>
            <a
              v-if="routeName === '/'"
              v-scroll-to="'#donut-chart'"
              alt="Donut Chart"
              class="cursor-scroll"
            >
              Donut Chart
            </a>
            <a
              v-if="routeName === '/'"
              v-scroll-to="'.cards-container'"
              alt="All Pages"
              class="cursor-scroll"
            >
              All Pages
            </a>
            <nuxt-link alt="Dashboard" to="/" exact-active-class="is-active">
              Dashboard
            </nuxt-link>
            <nuxt-link
              alt="Forms & Table"
              to="/formsTable"
              exact-active-class="is-active"
            >
              Forms & Table
            </nuxt-link>
            <a alt="Page 1" class="disabled">Page 1</a>
            <a alt="Page 2" class="disabled">Page 2</a>
            <a alt="Page 3" class="disabled">Page 3</a>
            <a alt="Page 4" class="disabled">Page 4</a>
            <a alt="Menu" @click="openMenu">Menu</a>
          </div>
        </div>
      </div>
    </section>
  </nav>
</template>

<script>
export default {
  computed: {
    menuStatus() {
      return this.$store.state.menuFocus
    },

    routeName() {
      return this.$nuxt.$route.path
    },

    navbarPos() {
      return this.$store.state.navbarPos
    }
  },

  mounted() {
    const lsNavbarPos = localStorage.getItem('navbarPos')
    const lsBool = lsNavbarPos === 'true'
    this.$store.dispatch('navbarPos', lsBool)
  },

  methods: {
    openMenu() {
      this.$store.commit('openMenu', !this.menuStatus)
    }
  }
}
</script>
