<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item">
        <div class="gathr">/</div>
      </a>
      <a class="navbar-item is-hidden-mobile">
        Home
      </a>
      <router-link class="navbar-item is-hidden-mobile" to="/projects">Projects</router-link>
      <router-link class="navbar-item is-hidden-mobile" to="/phone">Phone</router-link>
      <a class="navbar-item is-hidden-mobile">
        Calendar
      </a>
      <a class="navbar-item is-hidden-mobile" href="javascript://" v-on:click.prevent="logout">
        Logout
      </a>
      <div class="navbar-burger is-hidden-desktop is-hidden-tablet" v-bind:class="[navActive ? navActiveClass : '']" v-on:click="navSwitch()">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu is-hidden-desktop is-hidden-tablet" v-bind:class="[navActive ? navActiveClass : '']">
      <div class="navbar-mobile columns">
        <div class="column">
          <ul>
            <li>
              <a class="mobile-items"  href="javascript://" v-bind:class="{ active: isActive('home') }" v-on:click="setActive('home')">
            Home
              </a>
            </li>
            <li>
              <a  class="mobile-items" href="javascript://" v-bind:class="{ active: isActive('projects') }" v-on:click="setActive('projects')">
            Projects
              </a>
            </li>
            <li>
              <a class="mobile-items"  href="javascript://" v-bind:class="{ active: isActive('phone') }" v-on:click="setActive('phone')">
            Phone
              </a>
            </li>
            <li>
              <a class="mobile-items" href="javascript://" v-bind:class="{ active: isActive('calendar') }" v-on:click="setActive('calendar')">
            Calendar
              </a>
            </li>
            <li>
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
  export default {
    data () {
      return {
        activeItem: 'home',
        navActive: false,
        navActiveClass: 'is-active'
      }
    },
    methods: {
      isActive: function (menuItem) {
        return this.activeItem === menuItem
      },
      setActive: function (menuItem) {
        this.activeItem = menuItem
      },
      navSwitch: function () {
        if (this.navActive === false) {
          this.navActive = true
        } else {
          this.navActive = false
        }
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
