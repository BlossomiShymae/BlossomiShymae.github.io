<template>
  <div class="px-4 py-4">
    <h2>League of Legends Items Viewer</h2>
    <h5 class="text-muted">Patch {{ version }}</h5>
    <table class="table table-striped table-hover">
      <thead>
        <th scope="col">ID</th>
        <th scope="col">Icon</th>
        <th scope="col">Name</th>
        <th scope="col">Cost</th>
        <th scope="col">Sell</th>
      </thead>
      <tbody>
        <tr
          v-for="(item, id) in items"
          :id="`${id}`"
          :class="`${item.gold.total === 0 ? 'table-info' : ''}`"
        >
          <th scope="row">{{ id }}</th>
          <td>
            <div class="img-fluid">
              <img
                :src="`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`"
                style="width: 24px"
                class="rounded"
                loading="lazy"
              />
            </div>
          </td>
          <td>{{ item.name.replace(/<\/?[^>]+(>|$)/g, " ") }}</td>
          <td>
            {{ item.gold.total }}
          </td>
          <td>
            {{ item.gold.sell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";

const versionResponse = await axios.get(
  "https://ddragon.leagueoflegends.com/api/versions.json"
);
const version = versionResponse.data[0] as number;

const itemsResponse = await axios.get(
  `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/item.json`
);
const items = itemsResponse.data["data"];
</script>
