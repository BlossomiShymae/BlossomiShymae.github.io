<script setup lang="ts">
const props = defineProps<{
  css?: string;
}>();
</script>

<template>
  <span
    :class="'badge bg-secondary-subtle rounded-pill fw-bolder ' + css ?? ''"
  >
    <slot></slot>
  </span>
</template>

<style lang="scss" scoped></style>
