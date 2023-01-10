import { Button } from 'antd';
import { getGameVersion, getUserInfo, getUserTier } from 'api/search';
import { useEffect, useState } from 'react';

import type * as T from './type';
import * as S from './styled';
import TierImage from 'components/TierInfo';
import { UserTier, UserTierInfo } from 'types/search/UserTier';

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
          <span>{userInfo?.summonerLevel}</span>
        </S.ProfileImage>
        <div>
          <S.NameBox>{userInfo?.name}</S.NameBox>
          <Button type="primary" className="mt-2 ml-6 border rounded">
            전적 갱신
          </Button>
        </div>
      </S.Box>
      <S.Box>{userTier?.length && <TierImage props={userTier} />}</S.Box>
    </S.Container>
  );
};

export default UserProfile;
