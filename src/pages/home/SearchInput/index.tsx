import { getGameVersion, getUserInfo } from 'api/search';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styled';

import type * as T from './type';

const SearchInput = () => {
  const navigate = useNavigate();
  const [version, SetVersion] = useState<string>('');
  const [userInfo, setUserInfo] = useState<T.UserInfo>();

  useEffect(() => {
    console.log(version, userInfo);
  }, [version, userInfo]);

  const onSearch = async (value: string) => {
    const version = await getGameVersion().then((data) => SetVersion(data[0]));
    const list = await getUserInfo(value).then((data) => setUserInfo(data));
    console.log(list, version);
  };

  return (
    <S.InputContainer>
      <S.SearchInput placeholder="소환사명 검색" enterButton=". GG" onSearch={onSearch} />
    </S.InputContainer>
  );
};

export default SearchInput;
