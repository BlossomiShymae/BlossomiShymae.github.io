<script setup lang="ts">
import NavigationList from "./components/NavigationList.vue";
import LinkList from "./components/LinkList.vue";

const timestamp = Date.now();
const date = new Date(timestamp);
</script>

<template>
  <header>
    <div class="row g-0">
      <div class="p-2 border-success-subtle bg-shymae">
        <p class="fw-bold font-monospace text-dark m-0">
          <span class="fw-bolder fs-4">blossomishymae.github.io</span>
          {{ `(づ๑•ᴗ•๑)づ♡ ༘*.ﾟ⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆ ʚ♡⃛ɞ(•ᴗ•❁)ʚ` }}
        </p>
      </div>
    </div>
  </header>

  <body>
    <div class="row g-0 justify-content-center">
      <aside class="col-12 col-lg-2">
        <div class="p-2 h-100 bg-success-subtle border-success-subtle">
          <h4>Navigation</h4>
          <NavigationList
            :items="[
              { text: 'Home', to: '/', icon: 'oi:home' },
              { text: 'Code Stuff', to: '/code-stuff', icon: 'oi:folder' },
              { text: 'Pretty Art', to: '/art', icon: 'map:art-gallery' },
              { text: 'Community', to: '/community', icon: 'oi:people' },
              { text: 'About', to: '/about', icon: 'oi:info' },
            ]"
          />
        </div>
      </aside>

      <article class="col-12 col-lg-8">
        <div class="p-2 h-100 bg-success-subtle border-success-subtle">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </article>

      <aside class="col-12 col-lg-2">
        <div class="p-2 h-100 bg-success-subtle border-success-subtle">
          <h4>Links</h4>
          <LinkList
            :items="[
              {
                text: 'GitHub',
                href: 'https://github.com/BlossomiShymae',
                icon: 'radix-icons:github-logo',
              },
              {
                text: 'Reddit',
                href: 'https://www.reddit.com/user/MissUwuieTime',
                icon: 'mdi:reddit',
              },
            ]"
          />
          <h4 class="mt-2">Resources</h4>
          <NavigationList
            :items="[
              {
                text: 'MVVM',
                to: '/mvvm',
                icon: 'material-symbols:view-comfy-sharp',
              },
              {
                text: 'Service layer',
                to: '/service-layer',
                icon: 'ic:baseline-miscellaneous-services',
              },
              {
                text: 'Composition',
                to: '/composition',
                icon: 'simple-icons:jetpackcompose',
              },
              {
                text: 'Dependency injection',
                to: '/dependency-injection',
                icon: 'icon-park-solid:injection',
              },
            ]"
          />
        </div>
      </aside>
    </div>
  </body>

  <footer>
    <div class="row g-0">
      <div
        class="d-flex justify-content-around p-2 bg-success-subtle border-success-subtle"
      >
        <p class="text-muted fw-bold">
          🏳️‍⚧️ BlossomiShymae 🌸 © 2022 - {{ date.getFullYear() }}
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.bg-shymae {
  background-color: #73d17e !important;
}
</style>
