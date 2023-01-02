import { Link } from 'react-router-dom';
import LogoImage from 'assets/images/logo.png';

import type * as T from './type';

const Logo = ({ width, className }: T.LogoProps) => {
  return (
    <Link to="/">
      <img src={LogoImage} className={`max-w-[${width}] ${className}`} />
    </Link>
  );
};

export default Logo;
