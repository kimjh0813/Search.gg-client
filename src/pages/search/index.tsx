import { useEffect } from 'react';

import { useGetUserInfo } from 'hooks/query';
import { useLocation, useParams } from 'react-router-dom';

import UserGameRecord from './UserGameRecord';
import UserProfile from './UserProfile';
import * as S from './styled';

const Search = () => {
  const { name } = useParams<{ name: string }>();

  const [{ data: userInfo }] = useGetUserInfo({
    userName: name || '',
  });

  return (
    <S.Container>
      {userInfo && (
        <>
          <UserProfile userInfo={userInfo} />
          <UserGameRecord userInfo={userInfo} />
        </>
      )}
    </S.Container>
  );
};

export default Search;
