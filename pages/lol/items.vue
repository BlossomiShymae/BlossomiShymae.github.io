<template>
  <div class="px-4 py-4">
    <ClientOnly>
      <h2>Items</h2>
      <p class="mb-0">
        Item data displayed here comes from DataDragon as <b>item.json</b>:
      </p>
      <p>
        <code>{{
          `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/item.json`
        }}</code>
      </p>
      <p class="mb-0">Where the following format is used:</p>
      <p>
        <code>{{
          `https://ddragon.leagueoflegends.com/cdn/{version}/data/{locale}/item.json`
        }}</code>
      </p>
      <div class="alert alert-info">
        <b>📝 Note</b>
        <p class="mb-0">
          DataDragon is known to have missing information, inaccurate data, and
          other quirky thingies. Use other analogs such as CommunityDragon and
          MerakiAnalytics if this is an issue:
        </p>
        <p class="mb-0">
          <code>{{
            `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/items.json`
          }}</code>
        </p>
        <p class="mb-0">
          <code>{{
            `https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/items.json`
          }}</code>
        </p>
      </div>
      <h5 class="mb-3">Patch {{ version }}</h5>
      <div class="border rounded bg-dark p-3">
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
              :class="styleRow(item)"
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
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import { useVersions, useItems } from "~/composables/dataDragon";

useHead({
  title: "Items Viewer - blossomishymae.github.io",
});

const { version } = await useVersions();
const items = await useItems(version);

function styleRow(item: any) {
  if (item.gold.total === 0) {
    return 'border border-info-subtle';
  } else if (item.description.includes("ornnBonus")) {
    return 'border border-warning-subtle';
  }
  return '';
}
</script>
