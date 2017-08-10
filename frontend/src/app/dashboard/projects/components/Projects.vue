<template>
  <section class="projects">
    <div class="page__header">
      <div class="page__title">Project Board</div>
    </div>
    <div class="columns is-desktop is-multiline">
      <projectcard></projectcard>
      <projectcard></projectcard>
      <projectcard></projectcard>
    </div>
  </section>
</template>

<script>
import Projectcard from './ProjectCard'

export default {
  name: 'projects',
  components: {
    Projectcard
  }
}
</script>

<style scoped>
section {
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 10px;
}

@media (min-width: 1700px) {
    section {
      margin-left: 20%;
      margin-right: 20%;
    }
}

.page__header {
    padding-top: 10px;
    padding-bottom: 20px;
}

.page__title {
    font-family: Avenir-Heavy;
    color: #7D9BFF;
    font-size: 20px;
    text-align: left;
}

</style>
