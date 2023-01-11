import { Modal } from 'antd';
import styled from 'styled-components';

const SignUpModal = styled(Modal)`
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

const SignUpContainer = styled.div`
  padding: 0 20px;
  > p {
    color: #444;
  }
`;

const ItemBox = styled.div`
  margin-bottom: 10px;
  .ant-btn {
    width: 100%;
    margin-bottom: 8px;
    height: 35px;
  }
  .ant-input-prefix {
    margin-right: 10px;
  }
  > p {
    margin: 5px 0 0 5px;
    color: #e52528;
  }
`;

export { SignUpModal, SignUpContainer, ItemBox };
