import { useEffect, useState } from 'react';

import { getUserGameRecord, getUserInfo } from 'api/search';
import type { UserInfo } from 'types/search/UserTier';

import UserGameRecord from './UserGameRecord';
import UserProfile from './UserProfile';

const Search = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>();

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const userName = window.location.pathname.replaceAll('/search/', '');
    const response = await getUserInfo(userName);

    if (!response) return;
    setUserInfo(response);
  };

  return (
    <div className='max-w-page-full m-auto px-4'>
      <UserProfile userInfo={userInfo} />
      <UserGameRecord userInfo={userInfo} />
    </div>
  );
};

export default Search;
