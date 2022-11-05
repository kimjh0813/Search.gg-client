import { Input } from 'antd';

const { Search } = Input;

const SearchInput = () => {
  return (
    <div className='px-8 pt-4'>
      <Search placeholder='input search text' size='large' enterButton />
    </div>
  );
};

export default SearchInput;
