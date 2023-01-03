import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from 'reduce/modals';

import * as S from './styled';

const Menu = () => {
  const dispatch = useDispatch();

  return (
    <S.MenuContainer>
      <div>
        <Link to="/">홈</Link>
        <Link to="#" className="ml-4"></Link>
        <Link to="#" className="ml-4">
          커뮤니티
        </Link>
      </div>
      <div>
        <Button
          className="ml-4"
          onClick={() => {
            dispatch(openModal({ name: 'login' }));
          }}
        >
          로그인
        </Button>
        <Link to="#" className="ml-4">
          회원가입
        </Link>
      </div>
    </S.MenuContainer>
  );
};
export default Menu;
