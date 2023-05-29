import axios from "axios";

export async function useSummonerIcons() {
  const icons = await fetch(
    "/latest/plugins/rcp-be-lol-game-data/global/default/v1/summoner-icons.json"
  );
  return [...icons].sort((a: any, b: any) => (a.id > b.id ? 1 : 0));
}

async function fetch(path: string) {
  const res = await axios.get("https://raw.communitydragon.org" + path);
  return res.data;
}
