<template>
  <div>
    <h1>Gallery</h1>
    <div v-for="row in gallery">
      <div class="row">
        <div v-for="image in row" class="col-lg-4 mb-4" data-aos="fade-left" data-aos-duration="1000">
            <div style="width: 320px; position: relative;">
              <img class="img-fluid gallery-image rounded-2 border border-2 border-dark" :src="image" loading="lazy" style="box-shadow: 16px 16px black;"/>
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
  "/img/winter_2024.png",
  "/img/fall_2024.png",
  "/img/peace.png",
  "/img/reference_aug_2024.png",
  "/img/depression.png",
  "/img/blossomi_pout_full.png",
  "/img/blossomi_uwu_full.png",
  "/img/worry.png",
  "/img/sob_share.png",
  "/img/grrrlcu.png",
  "/img/june_2024.png",
  "/img/morning.png",
  "/img/you_can_give.png",
  "/img/headpats.png",
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