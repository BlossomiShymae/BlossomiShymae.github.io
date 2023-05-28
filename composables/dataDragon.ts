import axios from "axios";

export async function usePerks(version: string) {
  const perks = await fetch(`/cdn/${version}/data/en_US/runesReforged.json`);

  const data = [];
  for (const perk of perks) {
    data.push(perk);
    data.push(...perk.slots.flatMap((slot: any) => slot.runes));
  }

  return data;
}

export async function useItems(version: string) {
  const items = await fetch(`/cdn/${version}/data/en_US/item.json`);
  return items["data"];
}

export async function useChampions(version: string) {
  const champions = await fetch(`/cdn/${version}/data/en_US/champion.json`);
  return champions["data"];
}

export async function useVersions() {
  const versions = await fetch("/api/versions.json");
  return {
    version: versions[0],
    versions: versions,
  };
}

async function fetch(path: string) {
  const res = await axios.get("https://ddragon.leagueoflegends.com" + path);
  return res.data;
}
