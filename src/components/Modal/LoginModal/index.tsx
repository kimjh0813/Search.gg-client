import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { closeModal } from 'reduce/modals';

const LoginModal = () => {
  const dispatch = useDispatch();

  const close = () => dispatch(closeModal('login'));

  return (
    <Modal open={true} width={600} title="로그인" onCancel={close}>
      <div>dddd</div>
    </Modal>
  );
};

export default LoginModal;
