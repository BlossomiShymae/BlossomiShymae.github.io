<script setup lang="ts">
</script>

<template>
  <header class="container my-3 border">
    BlossomiShymae.github.io
  </header>

  <body class="container my-3">
    <div class="row">
      <aside class="col-2 border">
        <h4>Navigation</h4>
        <div class="list-group">
          <router-link to="/" class="list-group-item list-group-item-action nav-item">
            <span><iconify-icon icon="oi:home" class="me-2"/> Home</span>
          </router-link>
        </div>
      </aside>

      <article class="col-8 border">
        <router-view />
      </article>

      <aside class="col-2 border">
     
      </aside>
    </div>
  </body>

  <footer class="container my-3 border">
    <div class="d-flex justify-content-around border">
      
    </div>
  </footer>
</template>

<style lang="scss">
.list-group-item {
  >span {
    display: flex;
    align-items: center;
  }
}
</style>
