import UnRankedImage from 'assets/images/unRanked.png';

import * as S from './styled';

const NoTierData = () => {
  return (
    <S.Container>
      <S.TierInfoWrapper>
        <S.TierTitle>자유랭크 5x5</S.TierTitle>
        <S.TierInfoBox>
          <img src={UnRankedImage}></img>
        </S.TierInfoBox>
        <S.DescriptionBox>
          <div>UnRanked</div>
        </S.DescriptionBox>
      </S.TierInfoWrapper>
    </S.Container>
  );
};

export default NoTierData;
