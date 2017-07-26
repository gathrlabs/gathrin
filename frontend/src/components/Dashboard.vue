<template>
  <div class="dashboard">
    <navigation :logout="logout" />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import todosList from './TodosList'
import navigation from './Navigation'

export default {
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
  components: {
    'todos-list': todosList,
    'navigation': navigation
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
