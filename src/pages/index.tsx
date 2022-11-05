import { HomeContent, SearchInput } from '../components/Home';

const Home = () => {
  return (
    <section className='bg-[#9CC7FF] w-full h-screen'>
      <div className='max-w-page-full m-auto'>
        <SearchInput />
        <HomeContent />
      </div>
    </section>
  );
};

export default Home;
