import { getUserGameRecord, getUserInfo } from 'api/search';
import { useEffect, useState } from 'react';
import UserProfile from './UserProfile';

import type * as T from './type';

const Search = () => {
  const [userInfo, setUserInfo] = useState<T.UserInfo>();

  useEffect(() => {
    const userName = window.location.pathname.replaceAll('/search/', '');
    getUserInfo(userName).then((result) => setUserInfo(result));
  }, []);

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

  return (
    <div className="max-w-page-full m-auto px-4">
      <UserProfile userInfo={userInfo} />
    </div>
  );
};

export default Search;
