<template>
  <div class="p-4">
    <ClientOnly>
      <h2>Runes</h2>
      <p class="mb-0">
        Rune data displayed here comes from DataDragon as
        <b>runesReforged.json</b>:
      </p>
      <p>
        <code>
          {{
            `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/runesReforged.json`
          }}
        </code>
      </p>
      <p class="mb-0">Where the following format is used:</p>
      <p>
        <code>{{
          `https://ddragon.leagueoflegends.com/cdn/{version}/data/{locale}/runesReforged.json`
        }}</code>
      </p>
      <p class="alert alert-info">
        <b>📝 Note</b>
        <p class="mb-0">Runes are also referred to as <b>perks</b> when it comes to static data.</p>
      </p>
      <p class="alert alert-success">
        <b>🌳 Rune Tree</b>
        <p>A rune tree is any rune with an ID divisible by 100.</p>
        <p class="mb-0">So when using the Riot API:</p>
        <p class="mb-0"><b>perkStyle</b> - primary rune tree</p>
        <p><b>perkSubStyle</b> - secondary rune tree</p>
      </p>
      <p class="mb-0">The CommunityDragon data analog can be found here:</p>
      <p>
        <code>
          {{ `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perks.json` }}
        </code>
      </p>
      <div class="alert alert-primary">
        <b>🧩 Variables</b>
        <p ><b>var1</b>, <b>var2</b>, and <b>var3</b> are variable data a rune will use for a match. For reference, see the <b>endOfGameStatDescs</b> fields for the CommunityDragon data file.
        </p>
        <p class="mb-0">For example, Future's Market will use <b>var1</b> for Damage Dealt and <b>var2</b> for Gold Gained.</p>
      </div>
      <h5 class="mb-3">Patch {{ version }}</h5>
      <div class="border rounded bg-dark p-3">
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
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import { useVersions, usePerks } from "~/composables/dataDragon";

useHead({
  title: "Runes Viewer - blossomishymae.github.io",
});

const { version } = await useVersions();
const perks = await usePerks(version);
</script>
