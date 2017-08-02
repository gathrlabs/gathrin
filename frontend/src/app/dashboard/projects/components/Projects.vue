<template>
  <section class="projects">
    <div class="page__header">
      <div class="page__title">Project Board</div>
    </div>
    <projectcard></projectcard>
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
    margin: 50px;
  }

.page__header {
    padding-top: 10px;
    padding-bottom: 10px
}

</style>
