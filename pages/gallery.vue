<template>
  <div class="p-4">
    <h1>Gallery</h1>
    <p class="lead">Art of myself. :3</p>
    <div v-for="row in gallery">
      <div class="row">
        <div v-for="image in row" class="col-lg-4 mb-4" data-aos="fade-left" data-aos-duration="1000">
            <div style="width: 320px; position: relative;">
              <img class="img-fluid gallery-image" :src="image"/>
            </div>
        </div>
      </div>
      <div class="divider"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Gallery - blossomishymae.github.io"
});

const items = [
  "/img/abh.png",
  "/img/cross_stretch.png",
  "/img/tfc.png",
  "/img/aqua_face.png",
  "/img/transition.png",
  "/img/may_2024.png",
  "/img/yamcha.png",
  "/img/trans_elf_gf.png",
  "/img/banner_2.png"
];

const chunk = 3;
let gallery: string[][] = [];

for (let i = 0; i < items.length; i += chunk) {
  gallery.push(items.slice(i, i + chunk));
}
</script>

<style scoped>
.gallery-image {
  transition: all .5s ease;
  object-fit: cover;
}

.gallery-image:hover {
  transform: scale(1.25);
  position: absolute;
  z-index: 1000;
}
</style>