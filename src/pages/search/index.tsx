import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const location = useLocation();
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    setUserName(location.state.userName);
  }, []);

  return (
    <div className="max-w-page-full m-auto">
      <div>대맘구역</div>
      <div>대빠구역</div>
      <div>대맘구역</div>
    </div>
  );
};

export default Search;
