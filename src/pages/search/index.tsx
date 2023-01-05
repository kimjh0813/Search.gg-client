import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const location = useLocation();
  const [userName, setUserName] = useState<string>('');

  // useEffect(() => {
  //   setUserName(location.state.userName);
  // }, []);

  return (
    <div className="max-w-page-full m-auto">
      <div className="flex w-full bg-[#999] h-[200px]">
        <div>
          <div className="flex border-solid w-[100px] h-[100px] mt-6 ml-8">프로필</div>
          <div className="border-solid w-[100px] h-[30px] mt-2 ml-8">레벨</div>
        </div>
        <div>
          <div className="flex border-solid w-[100px] h-[30px] mt-6 ml-8">닉네임</div>
          <Button className="border-solid w-[100px] h-[30px] mt-6 ml-8">전적 갱신</Button>
        </div>

        <div className="flex border-solid w-[130px] h-[130px] mt-6 ml-16">솔로랭크 티어 이미지</div>

        <div className="border-solid w-[130px] h-[130px] mt-6 ml-8">
          상세 정보
          <br /> 티어 (플레 3) <br /> 점수 (1 LP)
          <br /> 승패 승률 (172승 172패 (50.0%))
        </div>

        <div className="flex border-solid w-[130px] h-[130px] mt-6 ml-16">자유랭크 티어 이미지</div>

        <div className="border-solid w-[130px] h-[130px] mt-6 ml-8">
          상세정보
          <br /> 티어 (플레 3) <br /> 점수 (1 LP)
          <br /> 승패 승률 (172승 172패 (50.0%))
        </div>
      </div>
    </div>
  );
};

export default Search;
