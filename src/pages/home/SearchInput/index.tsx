import { useNavigate } from 'react-router-dom';

import * as S from './styled';

const SearchInput = () => {
  const navigate = useNavigate();

  const onSearch = (value: string) => {
    if (!value) return;

    let userName: string;
    if (value.length === 2) {
      const splitValue = value.split('');
      userName = `${splitValue[0]} ${splitValue[1]}`;
    } else {
      userName = value;
    }
    navigate(`/search/${userName}`);
  };

  return (
    <S.InputContainer>
      <S.SearchInput placeholder='소환사명 검색' enterButton='. GG' onSearch={onSearch} />
    </S.InputContainer>
  );
};

export default SearchInput;
