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
          type="primary"
          className="ml-4"
          onClick={() => {
            dispatch(openModal({ name: 'LoginModal' }));
          }}
        >
          로그인
        </Button>
      </div>
    </S.MenuContainer>
  );
};
export default Menu;
