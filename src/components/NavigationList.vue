<script setup lang="ts">
import INavigationItem from '../models/INavigationItem';

const props = defineProps<{
  items: INavigationItem[]
}>();  
</script>

<template>
  <div v-for="item in items" class="list-group">
    <router-link :to="item.to" class="list-group-item list-group-item-action nav-item">
      <span><iconify-icon :icon="item.icon" class="me-2"/> {{item.text}}</span>
    </router-link>
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