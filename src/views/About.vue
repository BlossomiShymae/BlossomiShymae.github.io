<script setup lang="ts">
import Badge from "../components/Badge.vue";
</script>

<template>
  <div id="about">
    <h1>About Blossomi Shymae</h1>
    <Badge css="mb-2 me-2 text-pink">she/her</Badge>
    <Badge css="mb-2 text-greenish">INFP-T</Badge>

    <p>
      Shymae is the first name of the pseudonym, hehe. I'm a very shy trans lady
      that wants to be herself. I primarily code but I also like to digitally
      draw sometimes.... {{ `>.<` }}
    </p>
    <p>
      I'm literally a real life
      <a href="https://anilist.co/character/257562/Hitori-Gotou">Hitori Goto</a>
      or
      <a href="https://anilist.co/character/128986/Bocchi-Hitori"
        >Bocchi Hitori</a
      >
      but older. It is very hard to share, talk, or discuss anything without
      catastrophizing. The feeling of wanting friends but also being unable to
      be yourself is very heartbreaking.... :c
    </p>

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
