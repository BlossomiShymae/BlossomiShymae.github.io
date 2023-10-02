<template>
  <div>
    <ClientOnly>
      <div
    id="carrd-page"
    class="d-flex justify-content-center align-items-center vh-100"
    :style="`background-image: url(${entry.background})`"
  >
    <div id="carrd" class="card py-4 shadow rounded-4">
      <div class="d-flex justify-content-center">
        <div
          class="d-flex justify-content-center align-items-center"
          style="position: relative"
        >
          <div
            class="rounded-circle mx-2 mb-4"
            id="spinner"
            style="position: absolute"
          ></div>
          <div class="rounded-circle mx-2 mb-4" style="z-index: 1">
            <NuxtLink to="/secret/truth">
              <img
                class="rounded-circle p-1"
                id="carrd-avatar"
                :src="entry.avatar"
              />
            </NuxtLink>
          </div>
        </div>
        <div id="jp" class="d-flex justify-content-center align-items-center">
          <span class="fs-6 text-dark">ドキ ドキ</span>
        </div>
      </div>

      <div class="text-center text-dark">
        <h3 class="fw-light">Blossomi Shymae 🌸💔</h3>
        <p class="lead fw-bold">Virtual coder and web denizen</p>
      </div>
      <ul
        class="mb-2 p-4 list-unstyled flex-column border-none border-dark-subtle border-top border-bottom"
      >
        <li class="mb-2">
          <NuxtLink to="/" :class="linkCss">
            <div>GittyHub.io</div>
            <PhPower :size="32" color="white" weight="light" />
          </NuxtLink>
        </li>
        <li class="mb-2">
          <a href="https://github.com/BlossomiShymae" :class="linkCss">
            GittyHub
            <PhGithubLogo :size="32" color="white" weight="fill" />
          </a>
        </li>
        <li class="mb-2">
          <a href="https://reddit.com/u/BlossomiShymae" :class="linkCss">
            /u/BlossomiShymae
            <PhRedditLogo :size="32" color="white" weight="fill" />
          </a>
        </li>
        <li class="mb-2">
          <a href="https://reddit.com/u/MissUwuieTime" :class="linkCss">
            /u/MissUwuieTime
            <PhRedditLogo :size="32" color="white" weight="fill" />
          </a>
        </li>
        <li class="mb-2">
          <a href="https://tumblr.com/blossomishymae" :class="linkCss">
            Tumblr
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.178l.011.002z"
              />
            </svg>
          </a>
        </li>
        <li class="mb-2">
          <a href="https://twitter.com/BlossomiShymae" :class="linkCss">
            X / Twitter
            <PhTwitterLogo :size="32" color="white" weight="fill" />
          </a>
        </li>
      </ul>
      <div class="card-body text-center fw-semibold text-dark">
        <p>Not affiliated or endorsed with carrd.co 💜</p>
      </div>
    </div>
  </div>
    </ClientOnly>
  </div>
</template>

<style scoped>
#carrd-page {
  --avatar-height: 200px;
  --avatar-width: 200px;

  background-position: v-bind(entry.position);
  background-size: cover;
}

#carrd {
  width: 24rem;
  background-color: #ffffffe0;
}

#jp {
  writing-mode: vertical-rl;
  text-orientation: upright;
}

#carrd-avatar {
  width: var(--avatar-width);
  height: var(--avatar-height);
}

#spinner {
  background: conic-gradient(
    rgb(81, 224, 141),
    rgb(157, 40, 180),
    rgb(81, 224, 141)
  );
  animation: spin 2s linear infinite;
  width: var(--avatar-width);
  height: var(--avatar-height);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

<script lang="ts" setup>
import {
  PhPower,
  PhGithubLogo,
  PhRedditLogo,
  PhTwitterLogo,
} from "@phosphor-icons/vue";

const linkCss =
  "fs-5 px-4 d-flex justify-content-between align-items-center btn bg-accent-secondary text-light fw-semibold rounded-3 text-decoration-none hover-dark-dim w-100 text-start";

definePageMeta({
  layout: "pageless",
});

useSeoMeta({
  title: "Blossomi Shymae",
  ogTitle: "Blossomi Shymae",
  ogType: "profile",
  ogDescription: "Shymae's Socials 💜",
  ogImage: "https://blossomishymae.github.io/img/avatar.png",
  themeColor: "#77d694",
});

// Randomize avatar and background set
const entries = [
  { avatar: "/img/avatar.png", background: "/img/carrd_bg.png", position: "right"},
  { avatar: "/img/avatar_1.png", background: "/img/carrd_bg_1.png", position: "right"},
  { avatar: "/img/avatar_2.png", background: "/img/carrd_bg_2.png", position: "right 50% top 10%"},
  { avatar: "/img/avatar_3.png", background: "/img/carrd_bg_3.png", position: "right top 15%"}
];
const key = Math.floor(Math.random() * entries.length);
const entry = entries[key];
console.info("Selecting entry:")
console.table(entry);
</script>
