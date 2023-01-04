import { Button, Checkbox, Input, Modal } from 'antd';
import Logo from 'components/Logo';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from 'reduce/modals';

import * as S from './styled';
import type * as T from './type';

const LoginModal = () => {
  const dispatch = useDispatch();

  const [loginInfo, setLoginInfo] = useState<T.LoginInfo>({
    id: '',
    password: '',
    status: false,
  });

  const close = () => dispatch(closeModal('login'));

  const changLoginInfo = ({ target: { id, value } }: ChangeEvent<HTMLInputElement>) => {
    setLoginInfo((prev) => ({ ...prev, [id]: value }));
  };

  const login = () => {
    console.log(loginInfo);
  };

  return (
    <S.LoginModal open={true} footer={false} width={400} title={'로그인'} onCancel={close}>
      <S.LoginContainer>
        <S.ItemBox className="mt-4">
          <Input
            size="large"
            placeholder="아이디"
            id="id"
            value={loginInfo.id}
            onChange={changLoginInfo}
          />
        </S.ItemBox>
        <S.ItemBox>
          <Input.Password
            size="large"
            placeholder="비밀번호"
            id="password"
            value={loginInfo.password}
            onChange={changLoginInfo}
          />
        </S.ItemBox>
        <S.ItemBox>
          <Checkbox
            id="status"
            onChange={({ target }) => {
              setLoginInfo((prev) => ({ ...prev, status: target.checked }));
            }}
          />
          <label className="ml-2">로그인 상태 유지</label>
        </S.ItemBox>
        <S.ItemBox>
          <Button type="primary" onClick={login}>
            로그인
          </Button>
          <Button>회원가입</Button>
        </S.ItemBox>
      </S.LoginContainer>
    </S.LoginModal>
  );
};

export default LoginModal;
