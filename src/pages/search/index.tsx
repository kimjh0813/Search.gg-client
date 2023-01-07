import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserProfile from './UserProfile';

const Search = () => {
  return (
    <div className="max-w-page-full m-auto">
      <UserProfile />
    </div>
  );
};

export default Search;
