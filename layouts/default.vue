<template>
  <div class="page-holder">
    <section class="main-content columns">
      <div
        class="container column page-container"
        :class="{ pageTop: navbarPos }"
      >
        <nuxt />
      </div>

      <main-menu v-if="$store.state.auth && $store.state.auth.loggedIn" />
    </section>

    <main-bar v-if="$store.state.auth && $store.state.auth.loggedIn" />
  </div>
</template>

<script>
import MainBar from '~/components/MainBar'
import MainMenu from '~/components/Menu'

export default {
  components: {
    MainBar,
    MainMenu
  },

  data: () => ({
    items: [
      {
        title: 'Home',
        icon: 'menu',
        hex: '&#xe5d2;',
        to: { name: 'index' }
      },
      {
        title: 'Page 1',
        icon: 'local_shipping',
        hex: '&#xe558;',
        to: { name: 'page1' }
      }
    ]
  }),

  computed: {
    loggedOff() {
      return this.$store.state.auth
    },

    navbarPos() {
      return this.$store.state.navbarPos
    }
  },

  watch: {
    loggedOff(auth) {
      if (!auth || !auth.loggedIn) {
        this.$router.replace({ path: '/login' })
      }
    }
  },

  mounted() {
    if (!this.loggedOff || !this.loggedOff.loggedIn) {
      this.$router.replace({ path: '/login' })
    }
  }
}
</script>
