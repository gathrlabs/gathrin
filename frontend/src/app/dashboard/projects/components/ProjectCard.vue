<template>
  <div class="column is-one-third-desktop is-half-tablet is-12-mobile">
    <div class="project-card">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Finish Gathr/In
          </p>
          <a class="card-header-icon">
            <span class="icon">
              <i class="fa fa-ellipsis-h"></i>
            </span>
          </a>
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

export default {
  name: 'ProjectCard',
  components: {
    Item
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
    color: #ffd6a5;
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
</style>
