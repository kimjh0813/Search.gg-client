import { Button } from 'antd';
import { getGameVersion, getUserInfo } from 'api/search';
import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import type * as T from './type';
import * as S from './styled';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState<T.UserInfo>();
  const [version, setVersion] = useState<string>();

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const userName = window.location.pathname.replaceAll('/search/', '');
    await getGameVersion().then((data) => setVersion(data[0]));
    await getUserInfo(userName).then((result) => setUserInfo(result));
  };

  return (
    <div className="flex w-full bg-[#999] h-[200px]">
      <S.ProfileImage>
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${userInfo?.profileIconId}.png`}
          className=""
        />
        <label>{userInfo?.summonerLevel}</label>
      </S.ProfileImage>
      <div>
        <div className="flex border-solid w-[100px] h-[30px] mt-6 ml-8">{userInfo?.name}</div>
        <Button className="border-solid w-[100px] h-[30px] mt-6 ml-8">전적 갱신</Button>
      </div>

      <div className="flex border-solid w-[130px] h-[130px] mt-6 ml-16">솔로랭크 티어 이미지</div>

      <div className="border-solid w-[130px] h-[130px] mt-6 ml-8">
        상세 정보
        <br /> 티어 (플레 3) <br /> 점수 (1 LP)
        <br /> 승패 승률 (172승 172패 (50.0%))
      </div>

      <div className="flex border-solid w-[130px] h-[130px] mt-6 ml-16">자유랭크 티어 이미지</div>

      <div className="border-solid w-[130px] h-[130px] mt-6 ml-8">
        상세정보
        <br /> 티어 (플레 3) <br /> 점수 (1 LP)
        <br /> 승패 승률 (172승 172패 (50.0%))
      </div>
    </div>
  );
};

export default UserProfile;
