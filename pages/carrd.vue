<template>
  <div>
    <ClientOnly>
      <div
    id="carrd-page"
    class="d-flex justify-content-center align-items-start "
  >
    <div id="carrd" class="card m-2 py-4 px-4 border rounded-0">
      <div class="row">
        <div class="col-md-6">
          <div
          class="d-flex justify-content-center align-items-center"
          style="position: relative"
        >
          <div class="d-flex justify-content-center">
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
      
          </div>

          <div class="text-center">
            <h3 class="fw-light text-light">@blossomishymae 🌸💔</h3>
            <p class="lead fw-bold"><span class="text-accent-secondary fw-bold">ブロソミー・シャイマエ</span></p>
          </div>
        </div>

        <div class="col-md-6">
          <ul
        class="list-unstyled d-flex flex-column gap-1"
      >
        <li class="mb-2">
          <NuxtLink to="/" :class="linkCss">
            <div>GittyHub.io</div>
            <PhPower :size="32" color="black" weight="light" />
          </NuxtLink>
        </li>
        <li class="mb-2">
          <a href="https://github.com/BlossomiShymae" :class="linkCss">
            GittyHub
            <PhGithubLogo :size="32" color="black" weight="fill" />
          </a>
        </li>
        <li class="mb-2">
          <a href="https://reddit.com/u/BlossomiShymae" :class="linkCss">
            /u/BlossomiShymae
            <PhRedditLogo :size="32" color="black"  weight="fill" />
          </a>
        </li>
        <li class="mb-2">
          <a href="https://reddit.com/u/MissUwuieTime" :class="linkCss">
            /u/MissUwuieTime
            <PhRedditLogo :size="32" color="black" weight="fill" />
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
                fill="black"
                d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.178l.011.002z"
              />
            </svg>
          </a>
        </li>
        <li class="mb-2">
          <a href="https://twitter.com/BlossomiShymae" :class="linkCss">
            X / Twitter
            <PhTwitterLogo :size="32" color="black"  weight="fill" />
          </a>
        </li>
      </ul>
        </div>
      </div>

      <div class="row border-none border-top">
        <div class="card-body text-center fw-semibold text-light">
          <p>Not affiliated or endorsed with carrd.co 💜</p>
        </div>
      </div>
    </div>
  </div>
    </ClientOnly>
  </div>
</template>

<style scoped>
html, body, #__nuxt, #pageless-layout {
  height: 100% !important;
}

#carrd-page {
  --avatar-height: 200px;
  --avatar-width: 200px;

  background-position: v-bind(entry.position);
  background-size: cover;
  height: 100vh;
  width: 100vw;
}

#carrd {
  width: 800px;
  background-color: #000000;
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

class WeightedRandomBag {
  items: any[] = [];
  accumulatedWeight: number = 0.0;

  addEntry(object: any, weight: number): void {
    this.accumulatedWeight += weight;
    this.items.push({ object: object, accumulatedWeight: this.accumulatedWeight });
  }

  getRandom(): any {
    var r = Math.random() * this.accumulatedWeight;
    return this.items.find(i => i.accumulatedWeight >= r).object;
  }
}

const linkCss =
  "fs-5 px-4 d-flex justify-content-between align-items-center text-light fw-semibold rounded-3 text-decoration-none hover-dark-dim w-100 text-start";

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
const bag = new WeightedRandomBag();

bag.addEntry({ avatar: "/img/avatar.png", background: "/img/carrd_bg.png", position: "right"}, 10.0);
bag.addEntry({ avatar: "/img/avatar_1.png", background: "/img/carrd_bg_1.png", position: "right"}, 10.0);
bag.addEntry({ avatar: "/img/avatar_2.png", background: "/img/carrd_bg_2.png", position: "right 50% top 10%"}, 10.0);
bag.addEntry({ avatar: "/img/avatar_3.png", background: "/img/carrd_bg_3.png", position: "right top 15%"}, 10.0);
bag.addEntry({ avatar: "/img/avatar_4.png", background: "/img/carrd_bg_4.png", position: "right"}, 10.0);
bag.addEntry({ avatar: "/img/avatar_5.png", background: "", position : "right"}, 100.0);

const entry = bag.getRandom();
</script>
