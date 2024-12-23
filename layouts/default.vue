<template>
  <div class="position-relative vh-100">
    <div style="display: flex; min-height: 100vh; flex-direction: column;">
      <header
      class="sticky-top m-4"
      style="position: relative; z-index: 5; background-color: transparent;"
      >
      <nav class="d-flex justify-content-around align-items-center flex-wrap">
            <div class="d-flex align-items-center">
              <h3 class="fw-bold">
                <NuxtLink to="/" class="text-dark text-decoration-none">blossomishymae.github.io</NuxtLink>
              </h3>
            </div>

            <div class="d-flex justify-content-end flex-wrap">
            <div
              class="d-flex justify-content-end align-items-center w-100 h-100 gap-4"
            >
              <a href="https://blossomishymae.github.io/blog" :class="navLinkCss">Blog</a>
              <NuxtLink to="/gallery" :class="navLinkCss">Gallery</NuxtLink>
              <NuxtLink to="/portfolio" :class="navLinkCss">Portfolio</NuxtLink>
            </div>
          </div>
      </nav>
      </header>

      <div>
          <main role="main">
              <slot></slot>
          </main>
      </div>

      <footer style="background-color: #2A2A2A; color: white; flex: 1;" class="container-fluid p-2 mt-2 pb-4">
        <div class="d-flex justify-content-around my-4">
          <div class="d-flex" style="gap: 100px;">
            <div class="d-flex flex-column gap-2">
              <h6 class="fw-normal border-bottom">Links</h6>
              <NuxtLink to="/" :class="footerLinkCss">Home</NuxtLink>
              <a href="https://darkintaqt.com/" :class="footerLinkCss">DarkIntaqt</a>
              <a href="https://www.communitydragon.org/" :class="footerLinkCss">CommunityDragon</a>
            </div>
            <div class="d-flex flex-column gap-2">
              <h6 class="fw-normal border-bottom">Socials</h6>
              <a href="https://discord.gg/chEvEX5J4E">
                <FontAwesomeIcon :style="{color: 'white'}" :icon="faDiscord" size="1x"/>
              </a>
              <a href="https://reddit.com/u/BlossomiShymae">
                <FontAwesomeIcon :style="{color: 'white'}" :icon="faReddit" size="1x"/>
              </a>
              <a href="https://github.com/BlossomiShymae">
                <FontAwesomeIcon :style="{color: 'white'}" :icon="faGithub" size="1x"/>
              </a>
            </div>
          </div>
          <div>
            <h6 class="fw-normal border-bottom">Contact</h6>
            <a href="https://discord.gg/chEvEX5J4E" class="text-decoration-none text-light">
              <FontAwesomeIcon :style="{color: 'white'}" :icon="faDiscord" size="1x"/> Discord
            </a>
          </div>
        </div>
          <!-- <div class="d-flex justify-content-center align-items-center m-4">
            <p class="mb-0">
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
          </div> -->
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faDiscord, faReddit, faGithub } from '@fortawesome/free-brands-svg-icons';

const navLinkCss = "text-decoration-none text-dark fs-5 fw-light";
const footerLinkCss = "text-decoration-none text-light";
</script>
