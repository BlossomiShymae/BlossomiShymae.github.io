<template>
  <div class="px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img class="d-block mx-lg-auto img-fluid" :src="image" loading="lazy" />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">
          {{ title }}
          <span v-if="badge !== null" class="badge bg-info fs-6">{{
            badge
          }}</span>
        </h1>
        <h5 class="text-muted">{{ subtitle }}</h5>
        <p class="lead">
          <slot></slot>
        </p>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <a
          :href="repository"
          class="btn btn-primary btn-lg px-4 me-md-2"
          type="button"
        >
          <PhGitPullRequest :size="24" color="white" weight="fill" />
          Repository
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PhGitPullRequest } from "@phosphor-icons/vue";

defineProps<{
  image: string;
  title: string;
  subtitle: string;
  repository: string;
  badge?: string;
}>();
</script>
