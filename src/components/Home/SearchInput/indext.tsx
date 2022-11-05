import { Input, Space } from 'antd';

const { Search } = Input;

const SearchInput = () => {
  return (
    <Space direction='vertical'>
      <Search placeholder='input search text' enterButton />
    </Space>
  );
};

export default SearchInput;
