<template>
  <div class="phone">
    <h3>You made it to the phone component</h3>
  </div>
</template>

<script>
  export default {
    name: 'Phone'
  }
</script>

<style scoped>

</style>
  ;; for magithub
  (use-package magithub
    :after magit
    :config (magithub-feature-autinject t))
