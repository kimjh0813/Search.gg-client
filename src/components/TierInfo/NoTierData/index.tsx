import UnRankedImage from 'assets/images/unRanked.png';

import * as S from './styled';
import * as T from './type';

const NoTierData = ({ queueType }: T.NoTierDataProps) => {
  return (
    <S.Container className='w-full xsm:w-1/2 xsm:mx-2'>
      <S.TierInfoWrapper className='w-full mlg:w-[250px]'>
        <S.TierTitle>
          {queueType === 'RANKED_SOLO_5x5' ? '솔로랭크 5x5' : '자유랭크 5x5'}
        </S.TierTitle>
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
