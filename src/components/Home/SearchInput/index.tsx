import { useState } from 'react';
import { getGameVersion } from '../../../api/search/get';
import { RoundSearch } from './styled';

const SearchInput = () => {
  const [version, SetVersion] = useState<string>('');

  const onSearch = (value: string) => {
    getGameVersion().then((data) => SetVersion(data[0]));
  };

  console.log(version);
  return (
    <div className="px-32 pt-32 rounded-lg">
      <RoundSearch placeholder="소환사명 검색" size="large" enterButton onSearch={onSearch} />
    </div>
  );
};

export default SearchInput;
