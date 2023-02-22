<script setup lang="ts">
import NavigationList from './components/NavigationList.vue';
import LinkList from './components/LinkList.vue';

const timestamp = Date.now();
const date = new Date(timestamp);
</script>

<template>
  <header class="container my-3">
    <div class="row g-0">
      <div class="border border-2 p-2 bg-success-subtle border-success-subtle">
        <p class="fw-bold">BlossomiShymae.github.io 🌸 🏳️‍⚧️</p>
      </div>
    </div>
  </header>

  <body class="container my-3">
    <div class="row g-2">
      <aside class="col-2">
        <div class="border border-2 p-2 h-100 bg-success-subtle border-success-subtle">
          <h4>Navigation</h4>
          <NavigationList :items="[
            {text: 'Home', to: '/', icon: 'oi:home'},
            {text: 'Code Stuff', to: '/code-stuff', icon: 'oi:folder'},
            {text: 'Community', to: '/community', icon: 'oi:people'},
            {text: 'About', to: '/about', icon: 'oi:info'}]"/>
        </div>
      </aside>

      <article class="col-8">
        <div class="border border-2 p-2 h-100 bg-success-subtle border-success-subtle">
          <router-view />
        </div>
      </article>

      <aside class="col-2">
        <div class="border border-2 p-2 h-100 bg-success-subtle border-success-subtle">
          <h4>Links</h4>
          <LinkList :items="[
            {text: 'GitHub', href: 'https://github.com/BlossomiShymae', icon: 'radix-icons:github-logo' },
            {text: 'Reddit', href: 'https://www.reddit.com/user/MissUwuieTime', icon: 'mdi:reddit'}
          ]"/>
        </div>
      </aside>
    </div>
  </body>

  <footer class="container my-3">
    <div class="row g-0">
      <div class="d-flex justify-content-around border border-2 p-2 bg-success-subtle border-success-subtle">
        <p class="text-muted fw-bold">BlossomiShymae © 2022 - {{ date.getFullYear() }}</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
</style>
