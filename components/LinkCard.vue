<template>
  <a
    :href="url"
    class="link-card text-decoration-none rounded shadow"
    style="position: relative"
  >
    <div class="image-cover rounded" style="position: absolute"></div>
    <div
      class="d-flex p-4 flex-column justify-content-end image-content rounded text-light"
    >
      <slot></slot>
    </div>
  </a>
</template>

<style scoped>
.link-card {
  --card-height: 200px;
  --card-width: 400px;
  width: var(--card-width);
  height: var(--card-height);

  transform: none;
  transition: all 250ms;
}

.link-card:hover {
  transform: scale(1.02);
}

.image-cover {
  width: var(--card-width);
  height: var(--card-height);
  background-image: v-bind(image);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  z-index: -1;
}

.image-content {
  background: linear-gradient(transparent 10%, rgba(0, 0, 0, 0.9));
  z-index: 1;
  width: var(--card-width);
  height: var(--card-height);
  text-shadow: 2px 2px 8px black;
}
</style>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{
  src: string;
  url: string;
}>();

const image = ref(`url('${props.src}')`);
</script>
