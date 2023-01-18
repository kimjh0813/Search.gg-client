import Logo from 'components/Logo';

import HomeContent from './HomeContent';
import SearchUser from './SearchInput';
import * as S from './styled';

const Home = () => {
  return (
    <S.HomeContainer>
      <S.HomeSubContainer>
        <Logo className={'max-w-[500px] flex w-full m-auto py-16 px-6'} />
        <SearchUser />
        <HomeContent />
      </S.HomeSubContainer>
    </S.HomeContainer>
  );
};

export default Home;
