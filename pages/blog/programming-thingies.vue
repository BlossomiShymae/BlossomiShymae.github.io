<template>
  <div class="p-4">
    <h1>Programming Thingies</h1>
    <p>
      <a
        href="https://github.com/BlossomiShymae?tab=repositories"
        class="text-decoration-none text-normal text-light lead"
        >My complete list of programming thingies can be found here! 💜</a
      >
    </p>
    <div class="d-flex flex-wrap" style="gap: 18px">
      <LinkCard
        src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/498/498004.jpg"
        url="https://github.com/BlossomiShymae/clean-cuts"
        >
        <h3 class="fw-bold">Clean Cuts</h3>
        Making game data viewable in a human-friendly format. 
      </LinkCard>
      <LinkCard
        src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/163/163003.jpg"
        url="https://github.com/BlossomiShymae/barcodes"
        >
        <h3 class="fw-bold">barcodes</h3>
        Display your pride in the terminal
      </LinkCard>
      <LinkCard
        src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/loadouts/companions/tooltip_chibigwen_base_classic_tier1.png"
        url="https://github.com/BlossomiShymae/Needlework"
      >
        <h3 class="fw-bold">Needlework</h3>
        A helper development tool for the LCU!
      </LinkCard>
      <LinkCard
        src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/99/99006.jpg"
        url="https://github.com/BlossomiShymae/llux"
      >
        <h3 class="fw-bold">llux</h3>
        Transfer data to the LCU via the command-line interface! 🌟
      </LinkCard>
      <LinkCard
        src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/887/887000.jpg"
        url="https://github.com/BlossomiShymae/RiotBlossom"
      >
        <h3 class="fw-bold">RiotBlossom</h3>
        An asynchronous, extensible and magical .NET library for the Riot Games
        API to make things totes easier!
      </LinkCard>
      <LinkCard
        src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/887/887020.jpg"
        url="https://github.com/BlossomiShymae/snip-snip"
      >
        <h3 class="fw-bold">snip-snip</h3>
        A CommunityDragon recursive directory downloader tool! ✂
      </LinkCard>
      <LinkCard
        src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/104/104005.jpg"
        url="https://github.com/DarkIntaqt/challenges"
      >
        <h3 class="fw-bold">
          Challenge Tracker
          <span class="badge bg-dark fs-tiny">Contributor</span>
        </h3>
        A League of Legends website dedicated to tracking all challenge-related
        thingies! Owned by DarkIntaqt.com.
      </LinkCard>
      <LinkCard
        src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/loadouts/companions/tooltip_chibigwen_soulfighter_soulfighter_tier1.png"
        url="https://github.com/BlossomiShymae/skip-n-slash"
      >
        <h3 class="fw-bold">skip-n-slash</h3>
        A desktop version of the raw.communitydragon.org search bar.
      </LinkCard>
      <LinkCard
        src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/40/40046.jpg"
        url="https://github.com/BlossomiShymae/monsoon"
      >
        <h3 class="fw-bold">monsoon</h3>
        A lightweight client overlay for League of Legends that shows ARAM
        balance changes.
      </LinkCard>
      <LinkCard
        src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/145/145048.jpg"
        url="https://github.com/TheDrone7/shieldbow"
      >
        <h3 class="fw-bold">
          Shieldbow <span class="badge bg-dark fs-tiny">Contributor</span>
        </h3>
        The all-purpose League of Legends API client.
      </LinkCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Her Programming Thingies - blossomishymae.github.io",
});
</script>
