<script setup lang="ts">
import Bordered from "../components/Bordered.vue";
import Badge from "../components/Badge.vue";
</script>

<template>
  <div id="code-stuff">
    <h1>Code Stuff</h1>
    <p>
      This is stuff and thingies that I have made created myself!
      {{ `♡⸜(˶˃ ᵕ ˂˶)⸝♡` }}
    </p>

    <Bordered>
      <h2>🌸 ImageBlossoms<span class="text-muted">, 14 January 2023</span></h2>
      <a href="https://github.com/BlossomiShymae/ImageBlossoms">GitHub link</a>
      <p>
        Quickly resize many images at once! Made in C# with the Eto.Forms
        framework.
      </p>
    </Bordered>

    <Bordered>
      <a href="https://github.com/BlossomiShymae/Equinox">
        <img
          class="img-fluid"
          src="https://user-images.githubusercontent.com/87099578/211173064-8c6fff22-6f4b-410e-a850-fbdfd353fdf4.png"
        />
      </a>
      <h2>🌟 Equinox<span class="text-muted">, 8 January 2023</span></h2>
      <a href="https://github.com/BlossomiShymae/Equinox">GitHub link </a>
      <p>
        A friend notification application for League of Legends! Created in Java
        using the Swing framework following model-view-viewmodel architecture.
      </p>
    </Bordered>

    <Bordered>
      <a href="https://github.com/BlossomiShymae/monsoon">
        <img
          class="img-fluid"
          src="https://user-images.githubusercontent.com/87099578/193130174-e464d4a6-afa3-453f-a36e-4289acf5f248.png"
        />
      </a>
      <h2>🌀 monsoon<span class="text-muted">, 29 September 2022</span></h2>
      <a href="https://github.com/BlossomiShymae/monsoon">GitHub link </a>
      <p>
        A helper application solution for League of Legends that provides ARAM
        balance changes during champions select!
      </p>
      <p>
        monsoon was created in Python using PySide6 Qt-binding, pywin32,
        beautifulsoup4, and dependency-injector PIP packages.
      </p>
    </Bordered>

    <a href="https://github.com/BlossomiShymae/Needlework">
      <img
        class="img-fluid"
        src="https://user-images.githubusercontent.com/87099578/172766442-137dc140-b68b-45de-a0dc-7e60a24e068e.png"
      />
    </a>
    <h2>🪡 Needlework<span class="text-muted">, 8 June 2022</span></h2>
    <p>
      <Badge css="text-warning fw-bold">Publicly archived</Badge>
    </p>
    <a href="https://github.com/BlossomiShymae/Needlework">GitHub link </a>
    <p>
      A helper application for League of Legends that makes hextech crafting
      faster, easier, and flashier in just a few clicks!
    </p>
    <p>Needlework was created in TypeScript using Electron and Vue.js.</p>
  </div>
</template>

<style lang="scss" scoped></style>
