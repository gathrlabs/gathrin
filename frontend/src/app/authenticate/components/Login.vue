<template>
  <section class="hero is-fullheight is-bold">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-half is-offset-3">
            <div class="box">
              <h1 class="gathr title">
                gathr/in
              </h1>
              <h1 class="title">
                Welcome back!
              </h1>
              <div class="error" v-if="error">
                {{error.message}}
              </div>
              <p class="control">
                <input class="email-input input" type="text" placeholder="Email" name="email" v-model="email" v-on:keyup.enter="onSubmit(email, password)">
              </p>
              <p class="control">
                <input class="password-input input" type="password" placeholder="Password" name="password" v-model="password" v-on:keyup.enter="onSubmit(email, password)">
              </p>
              <p class="has-text-left">
              <a href="login" class="forgot-password">Forgot password?</a>
              </p>
              <p class="control has-text-centered">
                <button class="button__login" v-on:click.prevent="onSubmit(email, password)" v-on:keyup.enter="onSubmit(email, password)">Login</button>
              </p>
              <p class="has-text-centered">
                <a href="register" class="register">Don't have an account yet? Register here.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      email: undefined,
      password: undefined,
      error: undefined
    }
  },
  methods: {
    dismissError () {
      this.error = undefined
      this.clearAuthenticateError()
    },

    onSubmit (email, password) {
      this.authenticate({strategy: 'local', email, password})
      // Just use the returned error instead of mapping form the store.
        .catch(error => {
          let type = error.className
          error = Object.assign({}, error)
          error.message = (type === 'not-authenticated')
            ? 'Incorrect email or password.'
            : 'An error prevented login.'
          this.error = error
        })
    },
    ...mapMutations('auth', {
      clearAuthenticateError: 'clearAuthenticateError'
    }),
    ...mapActions('auth', ['authenticate'])
  }
}
</script>

<style scoped>
html,body {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  height: 100%;
  padding: 0;
  margin: 0;
}

.hero {
  background-color: #ebf0ff !important;
}

.box {
  background: #FFF;
  box-shadow: 0 3rem 5rem -2rem rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.title {
  color: #4B74FF;
}

.gathr {
  font-family: HelveticaNeue-Medium;
  font-size: 4.0em;
}

input:hover {
  box-shadow: 0 3rem 5rem -2rem rgba(44,69,255, 0.2) !important;
  border: 2px solid rgba(44,69,255, 0.2) !important;
  background-color: white;

}

input:focus {
  box-shadow: 0 3rem 5rem -2rem rgba(44,69,255, 0.2) !important;
  border: 2px solid rgba(44,69,255, 0.2) !important;
  background-color: white;
}

.email-input,
.password-input {
  background: #FFFFFF;
  border-radius: 3px;
  font-family: Avenir-Light;
  font-size: 24px;
  color: #635E5E;
  letter-spacing: 0;
  border: 2px rgba(211,211,211,0.3) solid;
  padding: 15px;
  box-shadow: none !important;
  margin: 10px 0px;
}

.error {
  color: #99B0FF;
}

.icon.user,
.icon.password {
  margin: 5px 10px 0 0;
}

.avatar img {
  border-radius: 100px;
  padding: 5px;
  border: 1px solid #dbdbdb;
}

.forgot-password {
  color: #7D9BFF;
  font-weight: bold;
  padding-right: 20px;
}

.forgot-password:hover {
  color: #2C5CFF;
}

.register {
  margin-top: 200px;
  align: center;
  font-family: Avenir-Heavy;
  color: #7D9BFF;
  text-decoration: underline;
  text-decoration-skip: ink;
}

.register:hover {
  color: #2C5CFF;
  transition: all 0.3s ease;
}

.button__login {
  display: block;
  background: #FFFFFF;
  border-radius: 5px ;
  font-family: Avenir-Heavy;
  font-size: 20px;
  color: #4B74FF;
  letter-spacing: 1.25px;
  line-height: 24px;
  margin: 24px auto 32px auto;
  padding: 10px 50px;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 7px 0 rgba(0,0,0,0.15);
  text-transform: uppercase;
  transition: all .3s;
}

.button__login:hover {
   box-shadow: 0 2px 2px 0 rgba(0,0,0,0.15);
  ms-transform: translate(0px, 2px); /* IE 9 */
    -webkit-transform: translate(0px, 2px); /* Safari */
    transform: translate(0px, 2px);
}

.button__login:active {
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.35);
}


.login-wrapper {
  margin: -0.75rem;
  overflow-y: hidden;
}
</style>
