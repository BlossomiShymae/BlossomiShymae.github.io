<template>
  <div class="container-fluid">
    <div class="row position-relative" data-aos="fade-left" data-aos-duration="1000">
      <div class="col-lg-6 mb-4 d-flex flex-column justify-content-center align-items-center">
        <div style="max-width: 650px;" class="m-4">
          <h1 class="display-5 mb-0">Blossomi Shymae</h1>
          <div class="d-inline-flex align-items-center w-100 mt-2" style="rotate: 6deg;">
            <h5>estrogen elf</h5>
            <img src="/img/estrogen.png" style="width: auto; height: 60px;"/>
          </div>
          <h4 class="mb-4 pb-2 border-bottom"><span class="fw-bold">ブロソミー・シャイマエ</span></h4>
          <p class="lead">Hiii! I'm your shy elf girl.
            I chat with friends and do things, such as gaming, drawing, programming, and surfing the web.</p>

            <div class="d-flex flex-wrap gap-4">
              <a class="hover-spin" href="https://discord.gg/chEvEX5J4E">
                <FontAwesomeIcon :style="{color: 'black'}" :icon="faDiscord" size="4x"/>
              </a>
              <a class="hover-spin" href="https://reddit.com/u/BlossomiShymae">
                <FontAwesomeIcon :style="{color: 'black'}" :icon="faReddit" size="4x"/>
              </a>
              <a class="hover-spin" href="https://github.com/BlossomiShymae">
                <FontAwesomeIcon :style="{color: 'black'}" :icon="faGithub" size="4x"/>
              </a>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="d-flex justify-content-center align-items-center">
          <div>
            <img src="/img/xmas_hero.png" class="img-fluid"/>
          </div>
        </div>
      </div>
      <div class="position-absolute w-100 h-100" style="background: linear-gradient(transparent 90%, #00000066 100%); pointer-events: none;"></div>
    </div>

    <div class="divider"></div>

    <div class="container">
      <div class="row" data-aos="fade-right" data-aos-duration="1000">
      <div class="col-lg-6 d-flex justify-content-center mb-4">
        <div style="width: 320px;">
          <img class="img-fluid rounded-2 border border-2 border-dark" src="/img/blossomi_uwu_full.png" style="box-shadow: 16px 16px 0px black;"/>
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
          <a href="https://reddit.com/u/BlossomiShymae" :class="linkCss" :style="linkStyle">Reddit</a>
          <a href="https://github.com/BlossomiShymae" :class="linkCss" :style="linkStyle">GitHub</a>
          <a href="https://tumblr.com/blossomishymae" :class="linkCss" :style="linkStyle">Tumblr</a>
          <a href="https://twitter.com/BlossomiShymae" :class="linkCss" :style="linkStyle">X / Twitter</a>
        </div>
      </div>
      <div class="col-lg-6 d-flex justify-content-center">
        <div style="width: 320px;">
          <img class="img-fluid rounded-2 border border-2 border-dark" src="/img/worry.png" style="box-shadow: 16px 16px 0px black;"/>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <div class="row" data-aos="fade-right" data-aos-duration="1000">
      <div class="col-lg-6 d-flex justify-content-center mb-4">
        <div style="width: 320px">
          <img class="img-fluid rounded-2 border border-2 border-dark" src="/img/blossomi_pout_full.png" style="box-shadow: 16px 16px 0px black;"/>
        </div>
      </div>
      <div class="col-lg-6">
        <h1 class="border-bottom pb-2">Contact</h1>
        <p class="lead"><a href="https://old.reddit.com/user/BlossomiShymae/" class="text-dark">Send a private message (not chat) to my Reddit!</a></p>
        <p class="lead"><a href="https://discord.gg/chEvEX5J4E" class="text-dark">I can also be reached via my Discord server!</a></p>
      </div>
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

const linkCss = "text-decoration-none text-dark lead ps-2 btn text-start";
const linkStyle = "background-color: #40FFBD; box-shadow: 8px 8px black; font-size: 18pt;"
</script>