<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item">
        <div class="gathr">/</div>
      </a>
      <router-link class="navbar-item is-hidden-mobile" to="/dashboard" v-bind:class="{ active: isActive('home') }" @click="setActive('home')">Home</router-link>
      <router-link class="navbar-item is-hidden-mobile" to="/dashboard/projects" v-bind:class="{ active: isActive('projects') }" v-on:click="setActive('projects')">Projects</router-link>
      <router-link class="navbar-item is-hidden-mobile" to="/dashboard/phone" v-bind:class="{ active: isActive('phone') }" @click="setActive('phone')">Phone</router-link>
      <router-link class="navbar-item is-hidden-mobile" to="/dashboard/calendar" v-bind:class="{ active: isActive('calendar') }" @click="setActive('calendar')">Calendar</router-link>
      <a class="navbar-item is-hidden-mobile" href="javascript://" v-on:click.prevent="logout">
        Logout
      </a>
  <div class="navbar-burger is-hidden-desktop is-hidden-tablet" v-on:click="toggle" v-click-outside="hide">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu is-hidden-desktop is-hidden-tablet is-active" v-show="opened">
      <div class="navbar-mobile columns">
        <div class="column">
          <ul>
            <li @click="hide">
              <router-link class="mobile-items" to="/dashboard" v-bind:class="{ active: isActive('home') }" @click="setActive('home')">Home</router-link>
            </li>
            <li @click="hide">
              <router-link class="mobile-items" to="/dashboard/projects" v-bind:class="{ active: isActive('projects') }" v-on:click="setActive('projects')">Projects</router-link>
            </li>
  <li @click="hide">
              <router-link class="mobile-items" to="/dashboard/phone" v-bind:class="{ active: isActive('phone') }" @click="setActive('phone')">Phone</router-link>
            </li>
  <li @click="hide">
              <router-link class="mobile-items" to="/dashboard/calendar" v-bind:class="{ active: isActive('calendar') }" @click="setActive('calendar')">Calendar</router-link>
            </li>
  <li @click="hide">
              <a class="mobile-items" href="javascript://" v-on:click.prevent="logout">
                Logout
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import ClickOutside from 'vue-click-outside'

  export default {
    data () {
      return {
        activeItem: 'home',
        navActive: false,
        navActiveClass: 'is-active',
        opened: false
      }
    },
    methods: {
      isActive: function (menuItem) {
        return this.activeItem === menuItem
      },
      setActive: function (menuItem) {
        this.opened = false
        this.activeItem = menuItem
      },
      toggle () {
        this.opened = true
      },
      hide () {
        this.opened = false
      }
    },
    mounted () {
      this.popupItem = this.$el
    },
    directives: {
      ClickOutside
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

  .navbar-item {
    font-family: Avenir-Heavy;
    font-size: 15px;
    color: #98A0A5;
  }

  .navbar-item:first-child:hover {
    box-shadow: none;
  }

  .navbar-item:hover {
    box-shadow: inset 0 -6px #5b80ff;
    transition: all 0.3s ease;
  }

  .active {
    box-shadow: inset 0 -6px #5b80ff;
    cursor: default;
  }

  .navbar-menu {
    position: fixed;
    top: 70px;
    left: 10px;
    right: 10px;
    background-color: #5b80ff;
    border-radius: 5px;
    z-index: 5;
    color: #FFF;
  }

  .navbar-menu li {
    text-align: left;
  }

  .mobile-items {
    padding: 0 30px;
    font-size: 15px;
    font-weight: 500;
    line-height: 30px;
    font-family: Avenir-Heavy;
    color: #FFF;
  }

  .navbar-burger.is-active span {
    background-color: #1349f9;
  }
</style>
