import HomeList from './HomeList';

const HomeContent = () => {
  return (
    <div className="w-full flex mt-8 h-[364px]">
      <div className="w-full h-full bg-white">
        <HomeList />
      </div>
      {/* <div className='w-[50%] h-full bg-white'>
        <HomeList />
      </div> */}
    </div>
  );
};

export default HomeContent;
