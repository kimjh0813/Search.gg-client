const apiKey = process.env.REACT_APP_RIOT_API_KEY;

const getGameVersion = async () => {
  const versionUrl = 'https://ddragon.leagueoflegends.com/api/versions.json';
  return await fetch(versionUrl)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

const getUserInfo = async (userName: string) => {
  const url = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${userName}?api_key=${apiKey}`;

  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

const getUserTier = async (encryptedSummonerId: string) => {
  const url = `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${apiKey}`;

  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

interface GameRecordProps {
  puuid: string;
  startTime?: number;
  endTime?: number;
  queue?: number;
  type?: 'ranked' | 'normal' | 'tourney' | 'tutorial';
  start?: number;
  count?: number;
}

const getUserGameRecord = async ({ puuid }: GameRecordProps) => {
  const url = `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${apiKey}`;

  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export { getGameVersion, getUserInfo, getUserTier };
