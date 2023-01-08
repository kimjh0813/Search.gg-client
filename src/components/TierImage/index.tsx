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

const TierImage = ({ tier }: T.TierImageProps) => {
  const Tier = () => {
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
    <S.Container>
      <Tier />
    </S.Container>
  );
};

export default TierImage;
