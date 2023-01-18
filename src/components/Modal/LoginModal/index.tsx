import { ChangeEvent, useState } from 'react';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Input, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { closeModal, openModal } from 'reduce/modals';

import * as S from './styled';
import type * as T from './type';

const LoginModal = () => {
  const dispatch = useDispatch();

  const [loginInfo, setLoginInfo] = useState<T.LoginInfo>({
    id: '',
    password: '',
    status: false,
  });

  const close = () => dispatch(closeModal('LoginModal'));

  const changLoginInfo = ({ target: { id, value } }: ChangeEvent<HTMLInputElement>) => {
    setLoginInfo(prev => ({ ...prev, [id]: value }));
  };

  const login = () => {
    console.log(loginInfo);
  };

  return (
    <S.LoginModal
      open={true}
      footer={false}
      width={400}
      title={'로그인'}
      onCancel={close}
      style={{ top: 190 }}>
      <S.LoginContainer>
        <S.ItemBox className='mt-4'>
          <Input
            size='large'
            placeholder='아이디'
            id='id'
            value={loginInfo.id}
            onChange={changLoginInfo}
            prefix={<UserOutlined />}
          />
        </S.ItemBox>
        <S.ItemBox>
          <Input.Password
            size='large'
            placeholder='비밀번호'
            id='password'
            value={loginInfo.password}
            onChange={changLoginInfo}
            prefix={<LockOutlined />}
          />
        </S.ItemBox>
        <S.ItemBox>
          <Checkbox
            id='status'
            onChange={({ target }) => {
              setLoginInfo(prev => ({ ...prev, status: target.checked }));
            }}
          />
          <label className='ml-2'>로그인 상태 유지</label>
        </S.ItemBox>
        <S.ItemBox style={{ marginTop: 30 }}>
          <Button type='primary' onClick={login}>
            로그인
          </Button>
          <Button
            onClick={() => {
              close();
              dispatch(openModal({ name: 'SignUpModal' }));
            }}>
            회원가입
          </Button>
        </S.ItemBox>
      </S.LoginContainer>
    </S.LoginModal>
  );
};

export default LoginModal;
