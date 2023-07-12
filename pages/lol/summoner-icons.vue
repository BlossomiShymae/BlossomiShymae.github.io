<template>
  <div class="p-4">
    <ClientOnly>
      <h2>League of Legends Summoner Icons Viewer</h2>
      <table class="table table-striped table-hover">
        <thead>
          <th scope="col">ID</th>
          <th scope="col">Icon</th>
          <th scope="col">Name</th>
          <th scope="col">Year</th>
          <th scope="col">Legacy</th>
        </thead>
        <tbody>
          <tr
            v-for="icon in pages[index]"
            :id="icon.id"
            :class="`${icon.isLegacy === true ? 'table-info' : ''}`"
          >
            <th scope="row">{{ icon.id }}</th>
            <td>
              <div class="img-fluid">
                <img
                  v-if="icon.imagePath != null"
                  :src="`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${icon.id}.jpg`"
                  style="width: 48px"
                  class="rounded"
                  loading="lazy"
                />
                <PhQuestion v-else :size="48" color="black" weight="fill" />
              </div>
            </td>
            <td>{{ icon.title }}</td>
            <td>{{ icon.yearReleased }}</td>
            <td>
              <PhCheckCircle
                v-if="icon.isLegacy"
                :size="24"
                color="green"
                weight="fill"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="Navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#" @click="first()">
              <PhArrowLineLeft :size="16" color="black" weight="fill" />
            </a>
          </li>
          <li class="page-item" v-if="index > 0" @click="prev()">
            <a class="page-link" href="#">{{ index }}</a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">{{ index + 1 }}</a>
          </li>
          <li class="page-item" v-if="index < count - 1" @click="next()">
            <a class="page-link" href="#">{{ index + 2 }}</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" @click="last()">
              <PhArrowLineRight :size="16" color="black" weight="fill" />
            </a>
          </li>
        </ul>
      </nav>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import {
  PhArrowLineLeft,
  PhArrowLineRight,
  PhCheckCircle,
  PhQuestion,
} from "@phosphor-icons/vue";
import { useSummonerIcons } from "~/composables/communityDragon";
import { usePagination } from "~/composables/pagination";

useHead({
  title: "Summoner Icons Viewer - blossomishymae.github.io",
});

const icons = await useSummonerIcons();
const { count, pages, index, prev, next, first, last } = usePagination(
  icons,
  100
);
</script>
