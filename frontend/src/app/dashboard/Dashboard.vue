<template>
  <div class="dashboard">
    <navigation :logout="logout"></navigation>
    <div class="staging">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from '../navigation/components/Navigation'

import { mapGetters, mapActions, mapState } from 'vuex'

export default {

  components: {
    Navigation
  },
  computed: {
    ...mapState('auth', [
      'user'
    ]),
    ...mapGetters('todos', {
      findTodosInStore: 'find'
    }),
    ...mapGetters('users', {
      users: 'list'
    }),
    todos () {
      return this.findTodosInStore({
        query: {
          $limit: 25
        }
      })
    }
  },
  methods: {
    ...mapActions('todos', {
      findTodos: 'find'
    }),
    ...mapActions('users', {
      findUsers: 'find'
    }),
    ...mapActions('auth', [
      'logout'
    ])
  },
  created () {
    if (!this.user) {
      return this.$router.replace({name: 'Login'})
    } else {
      this.$router.push({ name: 'Dashboard', params: { id: this.user._id } })
    }

    this.findUsers({
      query: {
        $sort: {email: 1},
        $limit: 25
      }
    })
    // Query messages from Feathers
    this.findTodos({
      query: {
        $limit: 25
      }
    })
  }
}
</script>

<style scoped>

  .dashboard {
  background-color: #F5F7FA !important;
  overflow-y: hidden;
  height: 100vh;
  }

</style>
