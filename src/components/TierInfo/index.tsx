import ChallengerImage from 'assets/images/challenger.png';
import GrandMasterImage from 'assets/images/grandMaster.png';
import MasterImage from 'assets/images/master.png';
import DiamondImage from 'assets/images/diamond.png';
import PlatinumImage from 'assets/images/platinum.png';
import GoldImage from 'assets/images/gold.png';
import SilverImage from 'assets/images/silver.png';
import BronzeImage from 'assets/images/bronze.png';
import IronImage from 'assets/images/iron.png';
import UnrankedImage from 'assets/images/unranked.png';

import * as S from './styled';
import type * as T from './type';
import { UserTier, UserTierInfo } from 'types/search/UserTier';

const TierImage = ({ props }: { props: UserTier[] }) => {
  const UserInfo: UserTier[] = props;

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
        return <img src={UnrankedImage}></img>;
    }
  };

  return (
    <>
      {UserInfo.map((v) => {
        return (
          <S.Container>
            <S.TierInfoWrapper>
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
                <p className="text-[15px]">
                  {v.wins}
                  <span style={{ color: 'blue' }}> Win</span> {v.losses}{' '}
                  <span style={{ color: 'red' }}>loss</span>
                </p>
              </S.WInLossBox>
            </S.TierInfoWrapper>
          </S.Container>
        );
      })}
    </>
  );
};

export default TierImage;
