import apiRequest from 'api/apiRequest';

const apiKey = process.env.REACT_APP_RIOT_API_KEY;

const getGameVersion = async () => {
  try {
    const response = await apiRequest<any>({
      url: '/api/lol/version',
      method: 'get',
    });
    if (!response) return;

    return response.data;
  } catch (error: any) {
    return error;
  }
};

const getUserInfo = async (userName: string) => {
  const url = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${userName}?api_key=${apiKey}`;

  return await fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
};

const getUserTier = async (encryptedSummonerId: string) => {
  const url = `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${apiKey}`;

  return await fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
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

const getUserGameRecord = async ({
  puuid,
  startTime,
  endTime,
  queue,
  type,
  start = 1,
  count = 20,
}: GameRecordProps) => {
  console.log({ puuid, startTime, endTime, queue, type, start, count });
  const setQuery = () => {
    let query: string = '';
    if (startTime) {
      query = query + 'startTime=' + startTime + '&';
    }
    if (endTime) {
      query = query + 'endTime=' + endTime + '&';
    }
    if (queue) {
      query = query + 'queue=' + queue + '&';
    }
    if (type) {
      query = query + 'type=' + type + '&';
    }
    query = query + 'start=' + start + '&';
    query = query + 'count=' + count + '&';

    return query;
  };

  const url = `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?${setQuery()}api_key=${apiKey}`;

  return await fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
};

export { getGameVersion, getUserInfo, getUserTier, getUserGameRecord };
