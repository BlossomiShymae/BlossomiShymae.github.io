<template>
  <div class="px-4 py-4">
    <ClientOnly>
      <h2>Champions</h2>
      <p class="mb-0">
        Champion data displayed here comes from DataDragon as
        <b>champion.json</b>:
      </p>
      <p>
        <code>{{
          `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`
        }}</code>
      </p>
      <p class="mb-0">Where the following format is used:</p>
      <p>
        <code>
          {{
            `https://ddragon.leagueoflegends.com/cdn/{version}/data/{locale}/champion.json`
          }}
        </code>
      </p>
      <p class="mb-0">
        For more information, <b>championFull.json</b> is available as well:
      </p>
      <p>
        <code>
          {{
            `https://ddragon.leagueoflegends.com/cdn/{version}/data/{locale}/championFull.json`
          }}
        </code>
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
            `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions/{id}.json`
          }}</code>
        </p>
        <p class="mb-0">
          <code>{{
            `https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions.json`
          }}</code>
        </p>
      </div>
      <h5 class="mb-3">Patch {{ version }}</h5>
      <div class="border rounded bg-dark p-3">
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
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import { useVersions, useChampions } from "~/composables/dataDragon";

useHead({
  title: "Champions Viewer - blossomishymae.github.io",
});

const { version } = await useVersions();
const champions = await useChampions(version);
</script>
