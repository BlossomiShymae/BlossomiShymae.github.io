<script setup lang="ts">
const props = defineProps<{
  src: string | undefined,
  imgClass?: string,
  imgStyle?: string
}>();

const source = ref(props.src);
const loading = ref(true);

onMounted(async () => {
  const { dotStream } = await import('ldrs');
  dotStream.register();
});
</script>

<template>
  <ClientOnly class="d-flex justify-content-center align-items-center"> 
    <l-dot-stream v-if="loading"
      class="w-100 h-100"
      size="60"
      speed="2.5"
      color="#202020" />
    <img
      :src="source"
      :class="`w-100 h-100 ${imgClass ?? ''}`"
      :style="`${imgStyle}`"
      loading="lazy" 
      v-on:load="loading = false;" 
      v-on:error="loading = false; source = '/img/sob_share.png';" />
  </ClientOnly>
</template>