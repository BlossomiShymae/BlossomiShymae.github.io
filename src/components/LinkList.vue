<script setup lang="ts">
import ILinkItem from '../models/ILinkItem';

const props = defineProps<{
  items: ILinkItem[]
}>();
</script>

<template>
  <div v-for="item in items" class="list-group">
    <a :href="item.href" class="list-group-item list-group-item-action">
      <span><iconify-icon :icon="item.icon" class="me-2"/> {{ item.text }}</span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.list-group-item {
  >span {
    display: flex;
    align-items: center;
  }
}
</style>