<template>
  <div class="todos-component">
    <div class v-for="todo in todos" key="todo._id">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{todo.name}}</strong> <small>@johnsmith</small> <small>31m</small>
                <br>
                {{todo.text}}
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item">
                  <span class="icon is-small"><i class="fa fa-reply"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fa fa-heart"></i></span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['todos']
  }
</script>
<style scoped lang="css">
html, body {
  background-color: #EBF0FF;
}
.box {
  margin: 20px;
  }
.box:hover {
  box-shadow: 0 4px 6px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  transition: all 0.2s ease;
  cursor: pointer;
}
</style>
