import UnRankedImage from 'assets/images/unRanked.png';

import * as S from './styled';

const NoTierData = () => {
  return (
    <S.Container>
      <S.TierInfoWrapper>
        <S.TierTitle>자유랭크</S.TierTitle>
        <S.TierInfoBox>
          <img src={UnRankedImage}></img>
        </S.TierInfoBox>
        <S.DescriptionBox>
          <p>정보 없음</p>
        </S.DescriptionBox>
      </S.TierInfoWrapper>
    </S.Container>
  );
};

export default NoTierData;
