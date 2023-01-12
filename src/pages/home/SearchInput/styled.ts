import { Input } from 'antd';
import styled from 'styled-components';

const InputContainer = styled.div`
  max-width: 600px;
  border-radius: 8px;
  margin: 0 auto;
  padding: 0 16px;
`;

const SearchInput = styled(Input.Search)`
  width: 100%;
  .ant-input {
    border-radius: 15px;
    height: 50px;
    font-size: 17px;
    padding-left: 20px;
  }
  .ant-input-search-button {
    height: 50px;
    font-size: 20px;
    font-weight: bold;
  }
`;

export { SearchInput, InputContainer };
