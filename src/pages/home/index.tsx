import Logo from 'components/Logo';
import HomeContent from './HomeContent';
import SearchUser from './SearchInput';

import * as S from './styled';

const Home = () => {
  return (
    <S.HomeContainer>
      <S.HomeSubContainer>
        <Logo width={'350px'} className={'flex m-auto py-16'} />
        <SearchUser />
        <HomeContent />
      </S.HomeSubContainer>
    </S.HomeContainer>
  );
};

export default Home;
