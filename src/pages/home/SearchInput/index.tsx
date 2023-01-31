import { useNavigate } from 'react-router-dom';

import * as S from './styled';

const SearchInput = () => {
  const navigate = useNavigate();

  const onSearch = (value: string) => {
    if (!value) return;

    navigate(`/search/${value}`);
  };

  return (
    <S.InputContainer>
      <S.SearchInput placeholder='소환사명 검색' enterButton='. GG' onSearch={onSearch} />
    </S.InputContainer>
  );
};

export default SearchInput;
