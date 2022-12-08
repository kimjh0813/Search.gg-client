import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="flex justify-between max-w-page-full mx-auto py-4">
      <div>
        <Link to="/">홈</Link>
        <Link to="#" className="ml-4">
          my
        </Link>
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
    </div>
  );
};
export default Menu;
