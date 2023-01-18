import { useEffect, useState } from 'react';

import { Button } from 'antd';
import { getGameVersion, getUserTier } from 'api/search';
import TierInfo from 'components/TierInfo';
import type { UserInfo, UserTier } from 'types/search/UserTier';

import * as S from './styled';

const UserProfile = ({ userInfo }: { userInfo: UserInfo | undefined }) => {
  const [version, setVersion] = useState<string>();
  const [userTier, setUserTier] = useState<UserTier[]>();

  useEffect(() => {
    getGameVersion().then(result => setVersion(result[0]));
  }, []);

  useEffect(() => {
    if (!userInfo?.id) return;
    getUserTier(userInfo?.id).then(result => setUserTier(result));
  }, [userInfo?.id]);
  return (
    <S.Container className='flex-col mlg:flex-row mlg:justify-between '>
      <S.Box className='px-4 py-6 xsm:px-8'>
        <S.ProfileBox>
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${userInfo?.profileIconId}.png`}
          />
          <span>{userInfo?.summonerLevel}</span>
        </S.ProfileBox>
        <S.InfoBox>
          <S.NameBox>{userInfo?.name}</S.NameBox>
          <Button type='primary' className='mt-2 ml-6 border rounded w-[100px]'>
            전적 갱신
          </Button>
        </S.InfoBox>
      </S.Box>
      <S.Box className='px-4 py-6 mgl:px-6'>
        <TierInfo userInfo={userTier} />
      </S.Box>
    </S.Container>
  );
};

export default UserProfile;
