<template>
  <div>
    <div class="row" data-aos="fade-left" data-aos-duration="1000">
      <div class="col-lg-6 mb-4">
        <div style="width: 320px;">
          <img class="img-fluid" src="/img/blossomi_logo.png" />
        </div>
        <h4 class="mb-4 pb-2 border-bottom"><span class="text-accent-secondary fw-bold">ブロソミー・シャイマエ</span></h4>

        <p class="lead">Hiii! I'm Blossomi Shymae, your shy elf girl.
          I chat with friends and do totes random things, such as gaming, drawing, programming, and surfing the web.</p>

          <div class="d-flex flex-wrap gap-4">
            <a class="hover-spin" href="https://discord.gg/chEvEX5J4E">
              <FontAwesomeIcon :style="{color: 'white'}" :icon="faDiscord" size="4x"/>
            </a>
            <a class="hover-spin" href="https://reddit.com/u/BlossomiShymae">
              <FontAwesomeIcon :style="{color: 'white'}" :icon="faReddit" size="4x"/>
            </a>
            <a class="hover-spin" href="https://github.com/BlossomiShymae">
              <FontAwesomeIcon :style="{color: 'white'}" :icon="faGithub" size="4x"/>
            </a>
          </div>
      </div>
      <div class="col-lg-6">
        <div class="d-flex justify-content-center align-items-center mb-4">
          <div style="width: 450px;">
            <img src="/img/fall_2024.png" class="img-fluid"/>
          </div>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <div class="row" data-aos="fade-right" data-aos-duration="1000">
      <div class="col-lg-6 d-flex justify-content-center">
        <div style="width: 320px;">
          <img class="img-fluid" src="/img/blossomi_uwu_full.png" />
        </div>
      </div>
      <div class="col-lg-6">
        <h1 class="border-bottom pb-2">Background</h1>
        <p class="lead">I'm a trans girl that is continuing the journey in discovering herself. 
          I hope to be a content creator one day but I'm not comfortable in doing so yet. </p>
          <p class="lead">As of now, I primarily make open-source programming tools and apps for the Riot Games Third Party Developer Community.</p>
      </div>
    </div>

    <div class="divider"></div>

    <div class="row" data-aos="fade-left" data-aos-duration="1000">
      <div class="col-lg-6 mb-4">
        <h1 class="border-bottom pb-2">Socials</h1>
        <div class="d-flex flex-column align-items-stretch gap-3">
          <a href="https://reddit.com/u/BlossomiShymae" class="text-decoration-none text-light lead bg-right-gradient ps-2">Reddit</a>
          <a href="https://github.com/BlossomiShymae" class="text-decoration-none text-light lead bg-right-gradient ps-2">GitHub</a>
          <a href="https://tumblr.com/blossomishymae" class="text-decoration-none text-light lead bg-right-gradient ps-2">Tumblr</a>
          <a href="https://twitter.com/BlossomiShymae" class="text-decoration-none text-light lead bg-right-gradient ps-2">X / Twitter</a>
        </div>
      </div>
      <div class="col-lg-6 d-flex justify-content-center">
        <div style="width: 450px;">
          <img class="img-fluid" src="/img/headpats.png"/>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <div class="row" data-aos="fade-right" data-aos-duration="1000">
      <div class="col-lg-6 d-flex justify-content-center">
        <div style="width: 320px">
          <img class="img-fluid" src="/img/blossomi_pout_full.png"/>
        </div>
      </div>
      <div class="col-lg-6">
        <h1 class="border-bottom pb-2">Contact</h1>
        <p class="lead"><a href="https://old.reddit.com/user/BlossomiShymae/" class="text-light">Send a private message (not chat) to my Reddit!</a></p>
        <p class="lead"><a href="https://discord.gg/chEvEX5J4E" class="text-light">I can also be reached via my Discord server!</a></p>
      </div>
    </div>

    
  </div>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faDiscord, faReddit, faGithub } from '@fortawesome/free-brands-svg-icons';

useHead({
  title: "Home - blossomishymae.github.io",
});
</script>