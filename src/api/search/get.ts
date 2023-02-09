import apiRequest from 'api/apiRequest';
import { TierInfo, UserInfo } from 'types/search/UserTier';

const apiKey = process.env.REACT_APP_RIOT_API_KEY;

const getGameVersion = async () => {
  try {
    const response = await apiRequest<string[]>({
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
  try {
    const response = await apiRequest<UserInfo>({
      url: `/api/lol/info/${userName}`,
      method: 'get',
    }).then(({ data }) => data);

    return response;
  } catch (error: any) {
    return error;
  }
};

const getUserTier = async (encryptedSummonerId: string) => {
  try {
    const response = await apiRequest<TierInfo[]>({
      url: `/api/lol/tier/${encryptedSummonerId}`,
      method: 'get',
    });
    if (!response) return;

    return response.data;
  } catch (error: any) {
    return error;
  }
};

export { getGameVersion, getUserInfo, getUserTier };
