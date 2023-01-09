import { Button } from 'antd';
import { getGameVersion, getUserInfo, getUserTier } from 'api/search';
import { useEffect, useState } from 'react';

import type * as T from './type';
import * as S from './styled';
import TierImage from 'components/TierInfo';
import { UserTier } from 'types/search/UserTier';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState<T.UserInfo>();
  const [version, setVersion] = useState<string>();
  const [userTier, setUserTier] = useState<UserTier[]>();

  useEffect(() => {
    const userName = window.location.pathname.replaceAll('/search/', '');
    getUserInfo(userName).then((result) => setUserInfo(result));
    getGameVersion().then((result) => setVersion(result[0]));
  }, []);

  useEffect(() => {
    if (!userInfo?.id) return;
    getUserTier(userInfo?.id).then((reuslt) => setUserTier(reuslt));
  }, [userInfo?.id]);

  return (
    <S.Container>
      <S.Box>
        <S.ProfileImage>
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${userInfo?.profileIconId}.png`}
            className=""
          />
          <label>{userInfo?.summonerLevel}</label>
        </S.ProfileImage>
        <div>
          <S.NameBox>{userInfo?.name}</S.NameBox>
          <Button type="primary" className="mt-2 ml-6 border rounded">
            전적 갱신
          </Button>
        </div>
        <div className="w-[130px] h-[130px] mt-6 ml-16">
          {userTier?.length &&
            userTier.map((value) => {
              return <TierImage value={value} />;
            })}
        </div>

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
      </S.Box>
    </S.Container>
  );
};

export default UserProfile;
