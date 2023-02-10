import { useEffect, useState } from 'react';

import { getUserInfo } from 'api/search';
import { useLocation } from 'react-router-dom';
import type { UserInfo } from 'types/search';

import UserGameRecord from './UserGameRecord';
import UserProfile from './UserProfile';
import * as S from './styled';

const Search = () => {
  const location = useLocation();

  const [userInfo, setUserInfo] = useState<UserInfo>({});

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const userName = location.pathname.replaceAll('/search/', '');
    const response = await getUserInfo(userName);

    if (!response) return;
    setUserInfo(response);
  };

  return (
    <S.Container>
      <UserProfile userInfo={userInfo} />
      <UserGameRecord userInfo={userInfo} />
    </S.Container>
  );
};

export default Search;
