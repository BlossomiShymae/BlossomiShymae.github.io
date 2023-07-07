<template>
  <div style="padding-left: calc(100vw - 100%)">
    <header
      class="container container-grid sticky-top p-2 bg-accent bg-accent-20"
      style="z-index: 2000; backdrop-filter: blur(4px)"
    >
      <div class="grid-aside w-100">
        <div class="d-flex align-content-center align-items-center w-100">
          <div class="me-2 rounded">
            <img src="/favicon.png" width="48" height="48" />
          </div>
          <h4 class="fw-light">blossomishymae.github.io</h4>
        </div>
      </div>
      <div class="grid-content ps-4 w-100">
        <div class="d-flex justify-content-end align-items-center w-100 h-100">
          <a
            href="https://github.com/BlossomiShymae"
            class="me-2 hover-dim rounded p-2"
            title="GitHub"
          >
            <PhGithubLogo :size="24" color="black" weight="fill" />
          </a>
          <a
            href="https://reddit.com/u/MissUwuieTime"
            class="me-2 hover-dim rounded p-2"
            title="Reddit"
          >
            <PhRedditLogo :size="24" color="black" weight="fill" />
          </a>
          <a
            href="https://twitter.com/blossomishymae"
            class="me-2 hover-dim rounded p-2"
            title="Twitter"
          >
            <PhTwitterLogo :size="24" color="black" weight="fill" />
          </a>
          <a
            href="https://tumblr.com/blossomishymae"
            class="me-2 hover-dim rounded p-2"
            title="Tumblr"
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
            <li class="mb-1">
              <NuxtLink
                to="/lol/runes"
                class="btn rounded text-decoration-none hover-dim w-100 text-start"
              >
                <PhCirclesThree :size="24" color="black" weight="fill" />
                LoL Runes
              </NuxtLink>
            </li>
            <li class="mb-1">
              <NuxtLink
                to="/lol/summoner-icons"
                class="btn rounded text-decoration-none hover-dim w-100 text-start"
              >
                <PhUserCircle :size="24" color="black" weight="fill" />
                LoL Summoner Icons
              </NuxtLink>
            </li>
          </ul>
          <div class="d-flex justify-content-center w-100">
            <p>
              Now with
              <svg
                width="24"
                height="24"
                viewBox="0 0 135 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="relative w-5 h-5 u-text-gray-200"
              >
                <title>Nuxt logo</title>
                <path
                  d="M74.2284 87.8731H123.414C124.977 87.8733 126.511 87.4745 127.864 86.7167C129.217 85.959 130.341 84.869 131.121 83.5565C131.902 82.244 132.313 80.7552 132.312 79.2398C132.312 77.7245 131.899 76.2361 131.118 74.9242L98.0856 19.4276C97.3048 18.1154 96.1817 17.0257 94.829 16.2681C93.4764 15.5105 91.942 15.1116 90.38 15.1116C88.8181 15.1116 87.2836 15.5105 85.931 16.2681C84.5784 17.0257 83.4552 18.1154 82.6745 19.4276L74.2284 33.6272L57.7148 5.86031C56.9334 4.54821 55.8097 3.45868 54.4567 2.70119C53.1037 1.9437 51.569 1.54492 50.0068 1.54492C48.4446 1.54492 46.9099 1.9437 45.5569 2.70119C44.2039 3.45868 43.0803 4.54821 42.2989 5.86031L1.1947 74.9242C0.41273 76.2361 0.000680577 77.7245 8.42355e-07 79.2398C-0.000678893 80.7552 0.410035 82.244 1.19083 83.5565C1.97163 84.869 3.09498 85.959 4.44789 86.7167C5.80081 87.4745 7.33558 87.8733 8.89785 87.8731H39.7727C52.0057 87.8731 61.0271 82.661 67.2346 72.4925L82.3054 47.1759L90.3776 33.6272L114.604 74.3244H82.3054L74.2284 87.8731ZM39.2694 74.3105L17.7227 74.3058L50.0212 20.046L66.1369 47.1759L55.3468 65.309C51.2244 71.9067 46.5411 74.3105 39.2694 74.3105Z"
                  fill="#00DC82"
                ></path>
              </svg>
              <span class="fw-bold">Nuxt</span>!
            </p>
          </div>
        </nav>
      </aside>
      <article id="main-content" class="order-1 grid-content ps-4 pb-4">
        <NuxtPage keepalive />
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
  PhBoot,
  PhUser,
  PhUserCircle,
  PhKeyboard,
  PhCirclesThree,
} from "@phosphor-icons/vue";
</script>
