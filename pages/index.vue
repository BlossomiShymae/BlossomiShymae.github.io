<template>
  <div>
    <ClientOnly>
      <div class="row mt-5 pt-5">
      <div class="col-md-6">
        <h2 class="fw-light">Blossomi Shymae 🌸💔</h2>
        <h4><span class="badge bg-accent-secondary rounded-pill">anxious elf girl</span> <span class="text-accent-secondary fw-bold">ブロソミー・シャイマエ</span></h4>

        <p>She has been involved in numerous projects in the Riot Games Third Party Developer for computer programming. Her 
          works and contributions have inspired others, such as Ray's cd-dd and cuppachino's Hexgate.
        </p>

        <p>Outside of programming, she likes to draw digital art such as her self-illustrations to the right.</p>
      </div>
      <div class="col-md-6">
        <div id="carousel" class="carousel slide border border-accent">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="3"></button>
          </div>

          <div class="carousel-inner text-shadow">
            <div class="carousel-item active">
              <img src="/img/carrd_bg_3.png" class="d-block w-100" />
              <div class="carousel-caption text-light d-none d-md-block">
                <h5>Original</h5>
                <p>Look at her smile! 🌸</p>
              </div>
            </div>

            <div class="carousel-item">
              <img src="/img/carrd_bg_2.png" class="d-block w-100" />
              <div class="carousel-caption text-light d-none d-md-block">
                <h5>Light costume</h5>
                <p>When the light is running low 🎵</p>
              </div>
            </div>

            <div class="carousel-item">
              <img src="/img/carrd_bg_1.png" class="d-block w-100"/>
              <div class="carousel-caption text-light d-none d-md-block">
                <h5>Original</h5>
                <p>Who knew this dress stands out with green! 💜</p>
              </div>
            </div>

            <div class="carousel-item">
              <img src="/img/carrd_bg.png" class="d-block w-100" />
              <div class="carousel-caption text-light d-none d-md-block">
                <h5>Original</h5>
                <p>The elf lady that worries too much. 💔</p>
              </div>
            </div>
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button id="next" class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Home - blossomishymae.github.io",
});
</script>
