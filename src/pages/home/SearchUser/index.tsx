import { getGameVersion, getUserInfo } from 'api/search/get';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoundSearch } from './styled';

interface userInfo {
  accountId: string;
  id: string;
  name: string;
  profileIconId: number;
  puuid: string;
  revisionDate: number;
  summonerLevel: number;
}

const SearchUser = () => {
  const navigate = useNavigate();
  const [version, SetVersion] = useState<string>('');
  const [userInfo, setUserInfo] = useState<userInfo>();

  useEffect(() => {
    console.log(version, userInfo);
  }, [version, userInfo]);

  const onSearch = async (value: string) => {
    const version = await getGameVersion().then((data) => SetVersion(data[0]));
    const list = await getUserInfo(value).then((data) => setUserInfo(data));
    console.log(list, version);
  };

  return (
    <div className="px-64 rounded-lg">
      <RoundSearch placeholder="소환사명 검색" enterButton=". GG" onSearch={onSearch} />
    </div>
  );
};

export default SearchUser;
