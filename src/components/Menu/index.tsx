import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from 'reduce/modals';

import * as S from './styled';

const Menu = () => {
  const dispatch = useDispatch();

  return (
    <S.MenuContainer>
      <div className="flex">
        <Link to="/" className="flex items-center justify-items-center">
          홈
        </Link>

        <Link to="#" className="flex ml-4 items-center justify-items-center">
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
