import ChallengerImage from 'assets/images/challenger.png';
import GrandMasterImage from 'assets/images/grandMaster.png';
import MasterImage from 'assets/images/master.png';
import DiamondImage from 'assets/images/diamond.png';
import PlatinumImage from 'assets/images/platinum.png';
import GoldImage from 'assets/images/gold.png';
import SilverImage from 'assets/images/silver.png';
import BronzeImage from 'assets/images/bronze.png';
import IronImage from 'assets/images/iron.png';
import UnRankedImage from 'assets/images/unRanked.png';

import * as S from './styled';
import type * as T from './type';
import { UserTier } from 'types/search/UserTier';
import { useMemo } from 'react';
import NoTierData from './NoTierData';

const TierInfo = ({ userInfo }: { userInfo: UserTier[] | undefined }) => {
  const Tier = ({ tier }: { tier: string }) => {
    switch (tier) {
      case 'CHALLENGER':
        return <img src={ChallengerImage}></img>;
      case 'GRANDMASTER':
        return <img src={GrandMasterImage}></img>;
      case 'MASTER':
        return <img src={MasterImage}></img>;
      case 'DIAMOND':
        return <img src={DiamondImage}></img>;
      case 'PLATINUM':
        return <img src={PlatinumImage}></img>;
      case 'GOLD':
        return <img src={GoldImage}></img>;
      case 'SILVER':
        return <img src={SilverImage}></img>;
      case 'BRONZE':
        return <img src={BronzeImage}></img>;
      case 'IRON':
        return <img src={IronImage}></img>;
      default:
        return <img src={UnRankedImage}></img>;
    }
  };

  return (
    <>
      {userInfo &&
        userInfo.map((v, index) => {
          return (
            <S.Container key={index}>
              <S.TierInfoWrapper>
                <S.TierTitle>
                  {v.queueType === 'RANKED_SOLO_5x5' ? '솔로랭크' : '자유랭크'}
                </S.TierTitle>
                <S.TierInfoBox>
                  <Tier tier={v.tier} />
                  <S.TierTextBox>
                    <p>
                      {v.tier} {v.rank}
                    </p>
                    <p>{v.leaguePoints} LP</p>
                  </S.TierTextBox>
                </S.TierInfoBox>
                <S.WInLossBox>
                  <p>
                    {v.wins}
                    <span style={{ color: '#5393CA', marginRight: 8 }}> 승</span> {v.losses}
                    <span style={{ color: '#ED6767' }}> 패</span>
                  </p>
                </S.WInLossBox>
              </S.TierInfoWrapper>
            </S.Container>
          );
        })}
      <NoTierData />
    </>
  );
};

export default TierInfo;
