<script setup lang="ts">
import NavigationList from './components/NavigationList.vue';
</script>

<template>
  <header class="container my-3 border">
    BlossomiShymae.github.io 🌸 🏳️‍⚧️
  </header>

  <body class="container my-3">
    <div class="row">
      <aside class="col-2 border">
        <h4>Navigation</h4>
        <NavigationList :items="[
          {text: 'Home', to: '/', icon: 'oi:home'},
          {text: 'Code Stuff', to: '/code-stuff', icon: 'oi:folder'},
          {text: 'Community', to: '/community', icon: 'oi:people'},
          {text: 'About', to: '/about', icon: 'oi:info'}]"/>
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

</style>
