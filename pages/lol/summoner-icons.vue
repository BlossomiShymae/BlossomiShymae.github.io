<template>
  <div class="p-4">
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
          v-for="icon in icons"
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
  </div>
</template>

<script lang="ts" setup>
import { PhCheckCircle, PhQuestion } from "@phosphor-icons/vue";
import { useSummonerIcons } from "~/composables/communityDragon";

const icons = await useSummonerIcons();
</script>
