<template>
  <div class="position-relative vh-100">
    <header
      class="sticky-top py-2 mb-4 border border-0 border-bottom"
    >
    <nav class="d-flex justify-content-around align-items-center flex-wrap">
          <div class="d-flex align-items-center">
            <div class="me-2 rounded-circle bg-accent-secondary-20">
              <NuxtLink to="/secret/thoughts">
                <img src="/img/avatar_5.png" class="rounded-circle p-1" id="favicon" />
              </NuxtLink>
            </div>
            <h3 class="fw-light">
              blossomishymae.github.io
            </h3>
          </div>

          <div class="d-flex justify-content-end flex-wrap">
          <div
            class="d-flex justify-content-end align-items-center w-100 h-100"
          >
            <NuxtLink
              to="/carrd"
              class="me-2 hover-dim rounded p-2"
              title="Carrd"
            >
              <PhCards :size="24" color="black" weight="fill" />
            </NuxtLink>
            <a
              href="https://github.com/BlossomiShymae"
              class="me-2 hover-dim rounded p-2"
              title="GitHub"
            >
              <PhGithubLogo :size="24" color="black" weight="fill" />
            </a>
            <a
              href="https://reddit.com/u/BlossomiShymae"
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
    </nav>
    </header>

    <main class="container mb-4">
      <div class="row gap-4">
        <div class="col-lg-2">
         <div class="row bg-accent border mb-4">
          <div id="links" class="d-flex flex-column justify-content-center py-4 gap-2">
            <NuxtLink to="/" :class="navLinkCss">Home!</NuxtLink>
            <NuxtLink to="/carrd" :class="navLinkCss">Socials!</NuxtLink>
            <NuxtLink to="/blog/programming-thingies" :class="navLinkCss">Programming!</NuxtLink>
            <NuxtLink to="https://www.reddit.com/user/BlossomiShymae/comments/183dwu1/reference_sheet_3/" :class="navLinkCss">Art Reference!</NuxtLink>
          </div>
         </div>

        <div class="row bg-accent border">
            <div class="d-flex justify-content-center">
          <p class="border-top border-accent border-2 mb-0">
            Made with
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
        <p class="fs-tiny text-center">blossomishymae.github.io was created under Riot Games' "Legal Jibber
            Jabber" policy using assets owned by Riot Games. Riot Games does not
            endorse or sponsor this project.</p>
        </div>
      </div>

      <div class="col-lg-9 bg-accent border">
        <slot></slot>
      </div>
    
      </div>
    </main>

    <ClientOnly>
      <div id="ticker">
        <div class="d-flex">
          <div v-for="info in infos">
            <a class="text-light text-decoration-none" :href="info[0]">{{ info[1] }}</a>
          </div>
        </div>
      </div>
    </ClientOnly>
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
  PhCards,
  PhArrowRight,
} from "@phosphor-icons/vue";

const navLinkCss = "text-decoration-none text-light fs-5";

const { data } = await useFetch("https://api.github.com/users/BlossomiShymae/repos");
let repos = data.value as any[];
repos = repos.filter(x => (x.fork == false) && (x.stargazers_count > 0));

const infos = repos.map(x => [x.html_url, `${x.name}🌸 Language: ${x.language}📜 Stars: ${x.stargazers_count} ⭐    `]);
</script>

<style scoped>
#ticker {
  position: fixed;
  bottom: 0;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
}

#ticker > div {
  transform: translateX(100%);
  animation: scroll 30s linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
