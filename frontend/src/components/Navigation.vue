<template>
  <nav class="navbar is-transparent">
      <a class="navbar-item">
        <div class="gathr">/</div>
      </a>
      <a class="navbar-item" href="javascript://" v-bind:class="{ active: isActive('home') }" v-on:click="setActive('home')">
        Home
      </a>
      <a class="navbar-item" href="javascript://" v-bind:class="{ active: isActive('projects') }" v-on:click="setActive('projects')">
        Projects
      </a>
      <a class="navbar-item" href="javascript://" v-bind:class="{ active: isActive('phone') }" v-on:click="setActive('phone')">
        Phone
      </a>
      <a class="navbar-item" href="javascript://"v-bind:class="{ active: isActive('calendar') }" v-on:click="setActive('calendar')">
        Calendar
      </a>
      <a class="navbar-item" href="javascript://" v-on:click.prevent="logout">
        Logout
      </a>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        activeItem: 'home'
      }
    },
    methods: {
      isActive: function (menuItem) {
        return this.activeItem === menuItem
      },
      setActive: function (menuItem) {
        this.activeItem = menuItem
      }
    },
    props: {
      logout: Function
    }
  }
</script>

<style scoped>

  .gathr {
    font-family: HelveticaNeue-Medium;
    color: #4B74FF;
    font-size: 2.5rem;
  }

  .navbar {
    border-bottom: 2px rgba(211,211,211,0.3) solid;
  }

 .active {
    border-bottom: 3px rgba(44, 92, 255, 0.4) solid;
  }

</style>
