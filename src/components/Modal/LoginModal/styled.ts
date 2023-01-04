import { Modal } from 'antd';
import styled from 'styled-components';

const LoginModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 5px;
    .ant-modal-header {
      text-align: center;
      border-bottom: solid 1px #ddd;
      .ant-modal-title {
        font-size: 18px;
        font-weight: bold;
        padding: 5px 0;
        color: #444;
      }
    }
  }
`;

const LoginContainer = styled.div`
  padding: 0 20px;
  label {
    color: #444;
  }
`;

const ItemBox = styled.div`
  margin-bottom: 20px;
  .ant-btn {
    width: 100%;
    margin-bottom: 8px;
  }
`;

export { LoginModal, LoginContainer, ItemBox };
