<template>
  <div class="px-4 py-4">
    <h2>League of Legends Champions Viewer</h2>
    <h5 class="text-muted">Patch {{ version }}</h5>
    <table class="table table-striped table-hover">
      <thead>
        <th scope="col">ID</th>
        <th scope="col">Icon</th>
        <th scope="col">Key</th>
        <th scope="col">Name</th>
        <th scope="col">Title</th>
      </thead>
      <tbody>
        <tr v-for="champion in champions" :id="champion.key">
          <th scope="row">{{ champion.key }}</th>
          <td>
            <div class="img-fluid">
              <img
                :src="`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`"
                style="width: 24px"
                class="rounded"
                loading="lazy"
              />
            </div>
          </td>
          <td>{{ champion.id }}</td>
          <td>{{ champion.name }}</td>
          <td>{{ champion.title }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { useVersions, useChampions } from "~/composables/dataDragon";

const { version } = await useVersions();
const champions = await useChampions(version);
</script>
