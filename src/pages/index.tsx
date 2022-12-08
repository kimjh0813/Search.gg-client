import { HomeContent, SearchUser } from '../components';
import Logo from '../components/Logo';

const Home = () => {
  return (
    <section className="bg-[#9CC7FF] w-full h-screen">
      <div className="max-w-page-full m-auto pt-16">
        <Logo width={'350px'} className={'flex m-auto py-16'} />
        <SearchUser />
        <HomeContent />
      </div>
    </section>
  );
};

export default Home;
