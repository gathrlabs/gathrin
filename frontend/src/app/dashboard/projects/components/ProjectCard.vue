<template>
  <div class="column is-one-third-desktop is-half-tablet is-12-mobile">
    <div class="project-card">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Finish Gathr/In
          </p>
          <div class="dropdown is-right is-active" @click="toggle" v-click-outside="hide">
            <div class="dropdown-trigger">
              <a class="card-header-icon" aria-haspopup="true" aria-controls="projectcard-utilities">
                <span class="icon">
                  <i class="fa fa-ellipsis-h"></i>
                </span>
              </a>
            </div>
            <div v-show="opened" class="dropdown-menu is-right" id="projectcard-utilities" role="menu">
              <div class="dropdown-content">
                <div class="dropdown-item">
                  <ul>
                     <a class="navbar-item">
                        Activity Overview
                    </a>
                    <a class="navbar-item">
                      Elements
                    </a>
                    <a class="navbar-item">
                      Components
                    </a>
                    <hr class="navbar-divider">
                    <div class="navbar-item">
                      <i class="fa fa-trash-o"><div class="icon-text">Delete</div></i>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="card-content">
          <div class="content">
            <item></item>
          </div>
        </div>
        <footer class="card-footer">
          <a class="card-footer-item">+ Add Item</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Item from './Item'
import ClickOutside from 'vue-click-outside'

export default {
  name: 'ProjectCard',
  data () {
    return {
      opened: false
    }
  },
  components: {
    Item
  },
  methods: {
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
  }
}
</script>

<style scoped>

.card {
    border-radius: 4px;
    border: none;
    box-shadow: 0 2px 20px 0px rgba(10, 10, 10, 0.1) !important;
    -webkit-box-shadow: 0 2px 20px 0px rgba(10, 10, 10, 0.1) !important;
}

.card-header-title {
    color: #6b7c93;
}

.card-header-icon {
    color: #3a68ff;
}

.card-header-icon:hover {
    color: #FDB557;
    transition: all 0.2s ease-in-out;
}

.card-footer-item {
    font-family: Avenir-Heavy;
    color: #bfceff;
}

.card-footer-item:hover {
    color: #4B74FF;
    transition: all 0.2s ease-in-out;
}

.dropdown-content {
    background-color: #7D9BFF;
}

.dropdown-item .navbar-item {
    color: white;
    font-weight: 600;
    text-align: left;
    cursor: pointer;
}

.dropdown-item .navbar-item:hover {
    background-color: #3a68ff;
}

.navbar-divider {
  display: block;
}

.icon-text {
  font-family: Avenir-Heavy;
  display: inline-block;
  float: right;
  padding-left: 5px;
  margin-top: 1px;
}

</style>
