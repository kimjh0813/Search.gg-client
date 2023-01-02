import { Input } from 'antd';
import styled from 'styled-components';

const InputContainer = styled.div`
  max-width: 600px;
  border-radius: 8px;
  margin: 0 auto;
`;

const SearchInput = styled(Input.Search)`
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
