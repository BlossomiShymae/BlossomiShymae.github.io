<template>
  <div style="padding-left: calc(100vw - 100%)">
    <header
      class="container container-grid sticky-top p-2 bg-accent bg-accent-20"
      style="z-index: 2000; backdrop-filter: blur(4px)"
    >
      <div class="grid-aside w-100">
        <div class="d-flex align-content-center align-items-center w-100">
          <div class="img-fluid img-thumbnail me-2">
            <img src="/favicon.png" width="32" height="32" />
          </div>
          <h4 class="fw-light">blossomishymae.github.io</h4>
        </div>
      </div>
      <div class="grid-content ps-4 w-100"></div>
    </header>
    <main class="container container-grid">
      <aside id="aside-parent">
        <nav
          id="aside-navbar"
          class="sticky-top overflow-y-auto h-100 d-flex flex-column p-3"
        >
          <ul
            class="mb-2 list-unstyled flex-column border-bottom border-accent"
          >
            <li class="mb-1">
              <NuxtLink
                to="/"
                class="btn rounded text-decoration-none hover-dim"
              >
                <PhHouse :size="24" color="black" weight="fill" />
                Home
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </aside>
      <article id="main-content" class="order-1 grid-content ps-4 pb-4">
        <NuxtPage />
      </article>
    </main>
    <div class="container">
      <footer class="py-3 my-4">
        <p class="text-center text-body-secondary">
          © 2023 BlossomiShymae 🌸💔
        </p>
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PhHouse } from "@phosphor-icons/vue";
</script>
