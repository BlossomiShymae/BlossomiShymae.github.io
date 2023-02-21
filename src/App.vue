<script setup lang="ts">
</script>

<template>
  <header class="container my-3 border">
    BlossomiShymae.github.io
  </header>

  <body class="container my-3">
    <div class="row">
      <aside class="col-2 border">
        <ul>
          <li>test</li>
        </ul>
      </aside>

      <article class="col-8 border">
        <nav class="d-flex justify-content-between align-items-center border">
          <router-link to="/">
            <span><iconify-icon icon="oi:home"/></span>Home
          </router-link>
        </nav>
        <router-view />
      </article>

      <aside class="col-2 border">
        <ul>
          <li>testies</li>
        </ul>
      </aside>
    </div>
  </body>

  <footer class="container my-3 border">
    <div class="d-flex justify-content-around border">
      <router-link to="/">
        <span><iconify-icon icon="oi:home"/></span>Home
      </router-link>
    </div>
  </footer>
</template>

<style lang="scss">

</style>
