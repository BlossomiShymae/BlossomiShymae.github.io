<template>
  <div class="d-flex vh-100 bg-black justify-content-around">
    <div
      class="ms-4 d-flex flex-column justify-content-center align-items-start text-light ff-utdr"
    >
      <blockquote class="blockquote fs-3">
        <p class="mb-0 secret-text">
          * you will know the truth, and the truth will set you free
        </p>
      </blockquote>
      <NuxtLink to="/carrd" class="text-decoration-none">go back</NuxtLink>
    </div>
    <img id="secrets" src="/img/she_knows_too_much.png" />
  </div>
</template>

<style scoped>
@keyframes hollow {
  from {
    filter: blur(0px);
    opacity: 1;
  }

  50% {
    filter: blur(2px);
    opacity: 0.9;
  }

  to {
    filter: blur(0px);
    opacity: 1;
  }
}
</style>

<script setup lang="ts">
definePageMeta({
  layout: "pageless",
});

useSeoMeta({
  title: "she knows too much",
  ogTitle: "it is rude to share secrets",
  ogDescription: "without something to give in return",
  ogImage: "https://blossomishymae.github.io/img/faes.png",
  themeColor: "#000000",
});
</script>
