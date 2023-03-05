<script setup lang="ts">
import Badge from "../components/Badge.vue";
</script>

<template>
  <div id="about">
    <h1>About</h1>
    <Badge css="mb-2 me-2 text-pink">she/her</Badge>
    <Badge css="mb-2 text-greenish">infp-t</Badge>

    <h2>Lore</h2>
    <p>
      Shymae, a phanstasma elf, once wandered in a perverse alternate dimension
      where the dark overcame the light. Her full name is Blossomi Shymae. Only
      the phantasmagoria of liminal spaces remained. She has accessed this world
      via a linked corridor that disappeared as quickly as it appeared. A hope
      of a future blossoms in her heart.
    </p>
    <p>
      It is unknown when she came to existence due to the transitioning reality
      of her dimension. She is quite shy from wandering the gaps.
      <i>Trying to find herself is now her main objective.</i>
    </p>
    <p>
      Being a phantasma elf, she can transition her dreams into the current
      reality, being able to rewrite the truth with her phantasma magic. Shymae
      rarely uses her abilities for combat, being a pacifist or a recreant, only
      when out of self-perservation.
    </p>

    <h2>Contact me</h2>
    <p>
      I can be found in the
      <a href="https://discord.com/invite/riotgamesdevrel"
        >Riot Games Third Party Developer Community Discord</a
      >.
    </p>
    <p class="fw-bold">BlossomiShymae<span class="text-muted">#7109</span></p>
  </div>
</template>

<style lang="scss" scoped>
.text-pink {
  color: pink;
}
.text-greenish {
  color: lightgreen;
}
</style>
