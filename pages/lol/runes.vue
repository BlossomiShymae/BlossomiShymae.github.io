<template>
  <div class="p-4">
    <h2>League of Legends Runes Viewer</h2>
    <h5 class="text-muted">Patch {{ version }}</h5>
    <table class="table table-striped table-hover">
      <thead>
        <th scope="col">ID</th>
        <th scope="col">Icon</th>
        <th scope="col">Name</th>
      </thead>
      <tbody>
        <tr
          v-for="perk in perks"
          :id="perk.id"
          :class="`${perk.id % 100 === 0 ? 'table-dark' : ''}`"
        >
          <th scope="row">{{ perk.id }}</th>
          <td>
            <div class="img-fluid">
              <img
                :src="`http://ddragon.leagueoflegends.com/cdn/img/${perk.icon}`"
                style="width: 24px"
                class="rounded"
                loading="lazy"
              />
            </div>
          </td>
          <td>{{ perk.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { useVersions, usePerks } from "~/composables/dataDragon";

const { version } = await useVersions();
const perks = await usePerks(version);
</script>
