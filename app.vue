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
      <div class="grid-content ps-4 w-100">
        <div class="d-flex justify-content-end align-items-center w-100 h-100">
          <a
            href="https://github.com/BlossomiShymae"
            class="me-2 hover-dim rounded p-2"
          >
            <PhGithubLogo :size="24" color="black" weight="fill" />
          </a>
          <a
            href="https://reddit.com/u/MissUwuieTime"
            class="me-2 hover-dim rounded p-2"
          >
            <PhRedditLogo :size="24" color="black" weight="fill" />
          </a>
          <a
            href="https://twitter.com/blossomishymae"
            class="me-2 hover-dim rounded p-2"
          >
            <PhTwitterLogo :size="24" color="black" weight="fill" />
          </a>
          <a
            href="https://tumblr.com/blossomishymae"
            class="me-2 hover-dim rounded p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.178l.011.002z"
              />
            </svg>
          </a>
        </div>
      </div>
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
                class="btn rounded text-decoration-none hover-dim w-100 text-start"
              >
                <PhHouse :size="24" color="black" weight="fill" />
                Home
              </NuxtLink>
            </li>
            <li class="mb-1">
              <NuxtLink
                to="/blog/programming-thingies"
                class="btn rounded text-decoration-none hover-dim w-100 text-start"
              >
                <PhKeyboard :size="24" color="black" weight="fill" />
                Programming Thingies
              </NuxtLink>
            </li>
            <li class="mb-1">
              <NuxtLink
                to="/lol/items"
                class="btn rounded text-decoration-none hover-dim w-100 text-start"
              >
                <PhBoot :size="24" color="black" weight="fill" />
                LoL Items
              </NuxtLink>
            </li>
            <li class="mb-1">
              <NuxtLink
                to="/lol/champions"
                class="btn rounded text-decoration-none hover-dim w-100 text-start"
              >
                <PhUser :size="24" color="black" weight="fill" />
                LoL Champions
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
import {
  PhHouse,
  PhGithubLogo,
  PhTwitterLogo,
  PhRedditLogo,
  Logo,
  PhBoot,
  PhUser,
  PhKeyboard,
} from "@phosphor-icons/vue";
</script>
