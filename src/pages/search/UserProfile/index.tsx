import { useEffect, useState } from 'react';

import { Button } from 'antd';
import { getGameVersion, getUserTier } from 'api/search';
import UserTier from 'components/TierInfo';
import type { TierInfo, UserInfo } from 'types/search';

import * as S from './styled';

const UserProfile = ({ userInfo }: { userInfo: UserInfo }) => {
  const [version, setVersion] = useState<string>();
  const [tierInfo, setTierInfo] = useState<TierInfo[]>();

  useEffect(() => {
    getVersion();
  }, []);

  useEffect(() => {
    getTier();
  }, [userInfo]);

  const getVersion = async () => {
    const response = await getGameVersion();

    if (!response) return;

    setVersion(response);
  };

  const getTier = async () => {
    if (!userInfo.id) return;
    const response = await getUserTier(userInfo.id);

    if (!response) return;
    setTierInfo(response);
  };

  return (
    <S.Container className='flex-col mlg:flex-row mlg:justify-between '>
      <S.Box className='px-4 py-6 xsm:px-8'>
        <S.ProfileBox>
          {version && userInfo && (
            <>
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${userInfo?.profileIconId}.png`}
              />
              <span>{userInfo?.summonerLevel}</span>
            </>
          )}
        </S.ProfileBox>
        <S.InfoBox>
          <S.NameBox>{userInfo?.name}</S.NameBox>
          <Button type='primary' className='mt-2 ml-6 border rounded w-[100px]'>
            전적 갱신
          </Button>
        </S.InfoBox>
      </S.Box>
      <S.Box className='px-4 py-6 mgl:px-6'>
        <UserTier tierInfo={tierInfo} />
      </S.Box>
    </S.Container>
  );
};

export default UserProfile;
