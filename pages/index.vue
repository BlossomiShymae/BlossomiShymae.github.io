<template>
  <div class="container-fluid">
    <div class="row position-relative">
      <div class="col-lg-6 mb-4 d-flex flex-column justify-content-center align-items-center">
        <div style="max-width: 650px;" class="m-4">
          <div>
            <h1 class="display-5 fw-bold mb-0 ml11">
              <span class="text-wrapper">
                <span class="line line1"></span>
                <span class="letters" ref="my-letters">Blossomi Shymae</span>
              </span>
            </h1>
          </div>
          <div class="d-inline-flex align-items-center w-100 mb-2">
            <h5>- estrogen elf</h5>
            <img src="/img/estrogen.png" style="width: auto; height: 60px;"/>
          </div>
          <p class="border-top fw-light">Hiii! I'm your shy elf girl.
            I chat with friends and do things, such as gaming, drawing, programming, and surfing the web.</p>

            <div class="d-flex flex-wrap gap-3">
              <a href="https://discord.gg/chEvEX5J4E">
                <FontAwesomeIcon :style="{color: 'black'}" :icon="faDiscord" size="2x" />
              </a>
              <a href="https://reddit.com/u/BlossomiShymae">
                <FontAwesomeIcon :style="{color: 'black'}" :icon="faReddit" size="2x"/>
              </a>
              <a href="https://github.com/BlossomiShymae">
                <FontAwesomeIcon :style="{color: 'black'}" :icon="faGithub" size="2x"/>
              </a>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="d-flex justify-content-center align-items-center">
          <div>
            <img src="/img/new_year.png" class="img-fluid"/>
          </div>
        </div>
      </div>
      <div class="position-absolute w-100 h-100" style="background: linear-gradient(transparent 90%, #00000066 100%); pointer-events: none;"></div>
    </div>

    <div class="divider"></div>

    <div class="container">
      <div class="row" data-aos="fade-right" data-aos-duration="1000">
        <div class="col-lg-6 d-flex justify-content-center mb-4">
          <div class="ratio ratio-1x1" style="width: 450px;">
            <img class="rounded-2 border border-2 border-dark" src="/img/shymae_pose.png" style="box-shadow: 16px 16px 0px black; object-fit: cover; object-position: right;"/>
          </div>
        </div>
        <div class="col-lg-6">
          <h1 class="border-bottom pb-2">Background</h1>
          <p>I'm a trans woman that loves to be herself. As a graduate, I like to program awesome stuff for the Riot Games Third Party Developer Community. Besides that, I also like to doodle art in my free time.</p>
          <p>I have multiple mental health struggles, but it doesn't stop me from doing the things I cherish the most. Being silly is my forte.</p>
          <p>If you happen to find me on Discord, be sure to be greet me with what you like to talk about. That way, I'd be happy to converse with you.</p>
        </div>
      </div>
    </div>

    <div class="divider"></div>
  </div>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faDiscord, faReddit, faGithub } from '@fortawesome/free-brands-svg-icons';

useHead({
  title: "Home - blossomishymae.github.io",
});

const { $anime } = useNuxtApp();
const textWrapper = useTemplateRef("my-letters");

onMounted(() => {
  textWrapper.value!.innerHTML = textWrapper.value!.textContent!.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
  $anime.timeline({loop: false})
    .add({
      targets: '.ml11 .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: '.ml11 .line',
      translateX: [0, textWrapper.value!.getBoundingClientRect().width + 10],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    }).add({
      targets: '.ml11 .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=775',
      delay: (el, i) => 34 * (i+1)
    }).add({
      targets: '.ml11 .line',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
  });
</script>

<style>
.ml11 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.ml11 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 100%;
  width: 3px;
  background-color: black;
  transform-origin: 0 50%;
}

.ml11 .line1 { 
  top: 0; 
  left: 0;
}

.ml11 .letter {
  display: inline-block;
  line-height: 1em;
}
</style>