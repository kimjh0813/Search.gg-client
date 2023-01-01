import { Link } from 'react-router-dom';
import HomeListItem from './HomeListItem';

const HomeList = () => {
  return (
    <div className="h-full">
      <div className="flex h-11 items-cente border-0 border-b-2 border-solid border-gray-200">
        <Link className="w-full p-2 text-black" to="/community">
          Search.GG Talk 인기글
        </Link>
      </div>
      <HomeListItem />
    </div>
  );
};

export default HomeList;
