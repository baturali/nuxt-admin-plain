<template>
  <section class="login">
    <div class="columns is-centered">
      <div class="column is-4">
        <div class="card">
          <div class="card-header">
            <p class="card-header-title has-text-grey">
              Login
            </p>
          </div>
          <div class="card-content">
            <div class="mdc-text-field">
              <label class="pure-material-textfield-outlined">
                <input v-model="userName" type="input" placeholder=" " />
                <span>Username</span>
              </label>
            </div>

            <div class="mdc-text-field">
              <label class="pure-material-textfield-outlined">
                <input v-model="password" type="password" placeholder=" " />
                <span>Password</span>
              </label>
            </div>
          </div>
        </div>

        <div class="buttons-wrapper">
          <a href="#" class="btn" data-wipe="Login" @click="postLogin">
            Login
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import '../components/scss/login.scss'

export default {
  data() {
    return {
      userName: '',
      password: ''
    }
  },

  computed: {
    loggedIn() {
      return this.$store.state.auth
    }
  },

  watch: {
    loggedIn(auth) {
      if (auth && auth.loggedIn) {
        this.$router.replace({ path: '/' })
      }
    }
  },

  mounted() {
    if (this.loggedIn && this.loggedIn.loggedIn) {
      this.$router.replace({ path: '/' })
    }
  },

  methods: {
    postLogin() {
      this.$store.dispatch('getToken', [this.userName, this.password])
    }
  }
}
</script>
