<template>
  <div class="px-4 py-4 row">
    <h2>League of Legends Champions Viewer</h2>
    <h5 class="text-muted">Patch {{ version }}</h5>
    <div class="d-flex flex-wrap justify-content-around">
      <div v-for="champion in champions" :id="champion.key">
        <div class="d-flex flex-column m-1 mb-2">
          <div class="img-fluid d-flex justify-content-center">
            <img
              style="width: 100px; margin-bottom: -2rem; z-index: 1000"
              class="rounded shadow-sm"
              :src="`http://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/${champion.image.full}`"
              loading="lazy"
            />
          </div>
          <div class="card p-2 m-2 pt-3" style="max-width: 320px">
            <div class="card-body">
              <h5 class="card-title mb-0">{{ champion.name }}</h5>
              <p class="lead ps-4">{{ champion.title }}</p>
              <p class="card-text">
                ID: <span class="fw-bold">{{ champion.key }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";

const versionResponse = await axios.get(
  "https://ddragon.leagueoflegends.com/api/versions.json"
);
const version = versionResponse.data[0] as string;

const championsResponse = await axios.get(`
https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`);
const champions = championsResponse.data["data"];
</script>
