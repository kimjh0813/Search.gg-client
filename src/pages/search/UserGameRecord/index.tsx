import { useEffect } from 'react';

import { getUserGameRecord } from 'api/search';
import type { UserInfo } from 'types/search/UserTier';

const UserGameRecord = ({ userInfo }: { userInfo: UserInfo | undefined }) => {
  useEffect(() => {
    getGameRecord();
  }, [userInfo?.puuid]);

  const getGameRecord = async () => {
    if (!userInfo?.puuid) return;

    const result = await getUserGameRecord({
      puuid: userInfo?.puuid,
      type: 'normal',
      count: 40,
    });
    console.log(result);
  };

  return <div></div>;
};

export default UserGameRecord;
