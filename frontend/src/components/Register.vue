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
                Register an Account
              </h1>
              <div class="error" v-if="error">
                {{error.message}}
              </div>
                <p class="control">
                <input class="input" type="text" placeholder="First and last name" name="name" v-model="name">
                </p>
                <p class="control">
                  <input class="input" type="text" placeholder="Email" name="email" v-model="email">
                </p>
                <hr>
                <p class="control">
                  <input class="input" type="password" placeholder="Password" name="password" v-model="password">
                </p>
                <p class="control">
                <input class="input" type="password" placeholder="Confirm Password" name="confirmPassword" v-model="confirmPassword">
                </p>
                <p class="control">
                  <button class="button__register" v-on:click.prevent="onSubmit(name, email, password, confirmPassword)">Register</button>
                </p>
                <p class="has-text-centered">
                  <a href="login" class="login">Already have an account? Login here.</a>
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
      name: undefined,
      email: undefined,
      password: undefined,
      confirmPassword: undefined,
      error: undefined
    }
  },

  methods: {
    dismissError () {
      this.error = undefined
      this.clearCreateError()
    },
    onSubmit (name, email, password) {
      this.dismissError()

      // Automatically log the user in after successful registration
      this.createUser({ name, email, password })
        .then(response => this.authenticate({strategy: 'local', email, password}))
        .catch(error => {
          let type = error.errorType
          error = Object.assign({}, error)
          error.message = (type === 'uniqueViolated')
            ? 'That email has already been registered, try another or click the link below to retrieve your password.'
            : 'Something went wrong during registration'
          this.error = error
        })
    },
    ...mapActions('users', {
      createUser: 'create'
    }),
    ...mapMutations('users', {
      clearCreateError: 'clearCreateError'
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

.input {
  background: #FFFFFF;
  border-radius: 3px;
  font-family: Avenir-Light;
  font-size: 24px;
  color: #635E5E;
  letter-spacing: 0;
  border: 2px rgba(211,211,211,0.3) solid;
  padding: 15px;
  margin: 10px 0px;
  box-shadow: none !important;
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

.login {
  margin-top: 200px;
  align: center;
  font-family: Avenir-Heavy;
  color: #7D9BFF;
  text-decoration: underline;
  text-decoration-skip: ink;
}

.login:hover {
  color: #2C5CFF;
  transition: all 0.3s ease;
}

.button__register {
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

.button__register:hover {
   box-shadow: 0 2px 2px 0 rgba(0,0,0,0.15);
  ms-transform: translate(0px, 2px); /* IE 9 */
    -webkit-transform: translate(0px, 2px); /* Safari */
    transform: translate(0px, 2px);
}

.button__register:active {
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.35);
}


.login-wrapper {
  margin: -0.75rem;
  overflow-y: hidden;
}

</style>
