import Logo from 'components/Logo';
import HomeContent from './HomeContent';
import SearchUser from './SearchUser';

import * as S from './styled';

const Home = () => {
  return (
    <S.HomeContainer>
      <S.HomeSubContainer className="">
        <Logo width={'350px'} className={'flex m-auto py-16'} />
        <SearchUser />
        <HomeContent />
      </S.HomeSubContainer>
    </S.HomeContainer>
  );
};

export default Home;
