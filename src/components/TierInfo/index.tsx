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
import { UserTier } from 'types/search/UserTier';
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
    <div className="flex flex-col xsm:flex-row">
      {userInfo &&
        userInfo.map((v, index) => {
          return (
            <S.Container key={index}>
              <S.TierInfoWrapper>
                <S.TierTitle>
                  {v.queueType === 'RANKED_SOLO_5x5' ? '솔로랭크 5x5' : '자유랭크 5x5'}
                </S.TierTitle>
                <S.TierInfoBox>
                  <Tier tier={v.tier} />
                  <S.TierTextBox>
                    <div className="tier_info">
                      {v.tier} {v.rank}
                    </div>
                    <div className="tier_info">{v.leaguePoints} LP</div>
                  </S.TierTextBox>
                </S.TierInfoBox>
                <S.WInLossBox>
                  <div>
                    {v.wins}
                    <span style={{ color: '#5393CA', marginRight: 8 }}> 승</span> {v.losses}
                    <span style={{ color: '#ED6767' }}> 패</span>
                  </div>
                  <div>승률: {((v.wins / (v.wins + v.losses)) * 100).toFixed(1)}%</div>
                </S.WInLossBox>
              </S.TierInfoWrapper>
            </S.Container>
          );
        })}
      <NoTierData />
    </div>
  );
};

export default TierInfo;
