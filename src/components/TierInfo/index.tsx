import type { TierInfo } from 'types/search';

import NoTierData from './NoTierData';
import TierImage from './TierImage';
import * as S from './styled';

const UserTier = ({ tierInfo }: { tierInfo: TierInfo[] | undefined }) => {
  const convertWinRate = (wins?: number, losses?: number) => {
    if (!wins || !losses) return 'noData';
    const winRate = ((wins / (wins + losses)) * 100).toFixed(1) + '%';

    return winRate;
  };

  return (
    <div className='flex flex-col justify-between w-full xsm:flex-row'>
      {tierInfo &&
        tierInfo.map((v, index) =>
          v.tier === 'UnRanked' ? (
            <NoTierData key={index} queueType={v.queueType} />
          ) : (
            <S.Container key={index} className='w-full xsm:w-1/2 xsm:mx-2'>
              <S.TierInfoWrapper className='w-full mlg:w-[250px]'>
                <S.TierTitle>
                  {v.queueType === 'RANKED_SOLO_5x5' ? '솔로랭크 5x5' : '자유랭크 5x5'}
                </S.TierTitle>
                <S.TierInfoBox>
                  <TierImage tier={v.tier} />
                  <S.TierTextBox>
                    <div className='tier_info'>{v.tier + ' ' + v.rank}</div>
                    <div className='tier_info'>{v.leaguePoints} LP</div>
                  </S.TierTextBox>
                </S.TierInfoBox>
                <S.WInLossBox>
                  <div>
                    {v.wins}
                    <span style={{ color: '#5393CA', marginRight: 8 }}> 승</span> {v.losses}
                    <span style={{ color: '#ED6767' }}> 패</span>
                  </div>
                  <div>승률: {convertWinRate(v.wins, v.losses)}</div>
                </S.WInLossBox>
              </S.TierInfoWrapper>
            </S.Container>
          ),
        )}
    </div>
  );
};

export default UserTier;
