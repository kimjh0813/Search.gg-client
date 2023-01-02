import { Link } from 'react-router-dom';

import * as S from './styled';

const Menu = () => {
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
        <Link to="/login" className="ml-4">
          로그인
        </Link>
        <Link to="#" className="ml-4">
          회원가입
        </Link>
      </div>
    </S.MenuContainer>
  );
};
export default Menu;
