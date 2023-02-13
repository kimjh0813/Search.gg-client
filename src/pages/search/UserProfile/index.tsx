import { useEffect, useState } from 'react';

import { Button } from 'antd';
import { getGameVersion, getUserTier } from 'api/search';
import UserTier from 'components/TierInfo';
import { useGetVersion } from 'hooks/query';
import useGetTierInfo from 'hooks/query/TierInfo/useGetTierInfo';
import type { TierInfo, UserInfo } from 'types/search';

import * as S from './styled';

const UserProfile = ({ userInfo }: { userInfo: UserInfo }) => {
  const [{ data: version }] = useGetVersion();
  const [{ data: tierInfo }] = useGetTierInfo({ userId: userInfo.id });

  return (
    <S.Container className='flex-col mlg:flex-row mlg:justify-between '>
      <S.Box className='px-4 py-6 xsm:px-8'>
        <S.ProfileBox>
          {version && (
            <>
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${userInfo.profileIconId}.png`}
              />
              <span>{userInfo.summonerLevel}</span>
            </>
          )}
        </S.ProfileBox>
        <S.InfoBox>
          <S.NameBox>{userInfo.name}</S.NameBox>
          <Button type='primary' className='mt-2 ml-6 border rounded w-[100px]'>
            전적 갱신
          </Button>
        </S.InfoBox>
      </S.Box>
      {tierInfo && (
        <S.Box className='px-4 py-6 mgl:px-6'>
          <UserTier tierInfo={tierInfo} />
        </S.Box>
      )}
    </S.Container>
  );
};

export default UserProfile;
