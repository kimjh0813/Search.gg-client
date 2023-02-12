import { useGetUserInfo } from 'hooks/query';
import { useLocation } from 'react-router-dom';

import UserGameRecord from './UserGameRecord';
import UserProfile from './UserProfile';
import * as S from './styled';

const Search = () => {
  const location = useLocation();

  const [{ data: userInfo }] = useGetUserInfo({
    userName: location.pathname.replaceAll('/search/', ''),
  });

  return (
    <S.Container>
      <UserProfile userInfo={userInfo} />
      <UserGameRecord userInfo={userInfo} />
    </S.Container>
  );
};

export default Search;
