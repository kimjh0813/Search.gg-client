import { Button, Checkbox, Input, message, Modal } from 'antd';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from 'reduce/modals';

import {
  LockOutlined,
  SmileOutlined,
  UserOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

import * as S from './styled';
import type * as T from './type';

const SignUpModal = () => {
  const dispatch = useDispatch();
  const [signUpInfo, setSignUpInfo] = useState<T.SingUpInfo>({
    id: '',
    password: '',
    passwordCheck: '',
    name: '',
  });
  const [isPasswordCheck, setIsPasswordCheck] = useState<boolean>(true);

  const close = () => dispatch(closeModal('SignUpModal'));

  const changLoginInfo = ({ target: { id, value } }: ChangeEvent<HTMLInputElement>) => {
    setSignUpInfo(prev => ({ ...prev, [id]: value }));
  };

  const checkPassword = () => {
    if (!signUpInfo.password) return;
    setIsPasswordCheck(signUpInfo.password === signUpInfo.passwordCheck);
  };

  const signUp = () => {
    if (!isPasswordCheck) {
      message.error('비밀번호를 확인해주세요.');
      return;
    }
    const { id, password, passwordCheck, name } = signUpInfo;

    if (!id || !password || !passwordCheck || !name) {
      message.error('정보를 모두 입력해주세요.');
      return;
    }

    console.log(signUpInfo);
  };

  return (
    <S.SignUpModal
      open={true}
      footer={false}
      width={400}
      title={'회원가입'}
      onCancel={close}
      style={{ top: 190 }}>
      <S.SignUpContainer>
        <p>회원정보를 입력해주세요.</p>
        <S.ItemBox className='mt-4'>
          <Input
            size='large'
            placeholder='아이디'
            id='id'
            value={signUpInfo.id}
            onChange={changLoginInfo}
            prefix={<UserOutlined />}
          />
        </S.ItemBox>
        <S.ItemBox>
          <Input.Password
            size='large'
            placeholder='비밀번호'
            id='password'
            value={signUpInfo.password}
            onChange={changLoginInfo}
            onBlur={checkPassword}
            prefix={<LockOutlined />}
          />
        </S.ItemBox>
        <S.ItemBox>
          <Input.Password
            size='large'
            placeholder='비밀번호 확인'
            id='passwordCheck'
            value={signUpInfo.passwordCheck}
            onChange={changLoginInfo}
            onBlur={checkPassword}
            prefix={<LockOutlined />}
          />
          {!isPasswordCheck && (
            <p>
              <ExclamationCircleOutlined />
              &nbsp;동일한 비밀번호를 입력해주세요.
            </p>
          )}
        </S.ItemBox>
        <S.ItemBox>
          <Input
            size='large'
            placeholder='닉네임'
            id='name'
            value={signUpInfo.name}
            onChange={changLoginInfo}
            prefix={<SmileOutlined />}
          />
        </S.ItemBox>
        <S.ItemBox style={{ marginTop: 30 }}>
          <Button type='primary' onClick={signUp}>
            가입하기
          </Button>
        </S.ItemBox>
      </S.SignUpContainer>
    </S.SignUpModal>
  );
};

export default SignUpModal;
