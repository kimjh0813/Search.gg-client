const Menu = () => {
  return (
    <div className='flex justify-between max-w-page-full mx-auto'>
      <div>
        <a href='/'>홈</a>
        <a href='/my' className='ml-4'>
          my
        </a>
        <a href='/community' className='ml-4'>
          커뮤니티
        </a>
      </div>
      <div>
        <a href='/login' className='ml-4'>
          로그인
        </a>
        <a href='/signup' className='ml-4'>
          회원가입
        </a>
      </div>
    </div>
  );
};
export default Menu;
