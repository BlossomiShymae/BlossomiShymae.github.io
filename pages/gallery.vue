<template>
  <div class="container-fluid mb-4">
    <div class="d-flex flex-wrap justify-content-around">
      <div v-for="(item, index) in items" :id="`${index}`" class="gallery-image">
        <div data-aos="fade-left" data-aos-duration="1000" style="margin: 32px; width: 320px; position: relative;" >
            <div class="ratio ratio-4x3">
              <LdrsImg img-class="img-fluid rounded-2 border border-2 border-dark" :src="item" img-style="box-shadow: 16px 16px black; object-fit: contain;"/>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Gallery - blossomishymae.github.io"
});

const items = [
  "/img/2025_hero.png",
  "/img/boymodder.png",
  "/img/new_year.png",
  "/img/shymae_pose.png",
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
</script>

<style scoped>
.gallery-image {
  transition: all .5s ease;
  position: relative;
  z-index: 10;
}

.gallery-image:hover {
  transform: scale(1.25);
  position: relative;
  z-index: 1000;
}
</style>