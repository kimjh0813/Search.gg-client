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
      <div>a</div>
      <div>b</div>
      <div>c</div>
    </div>
  );
};

export default Search;
