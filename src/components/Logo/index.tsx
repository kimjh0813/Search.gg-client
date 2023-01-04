import { Link } from 'react-router-dom';
import LogoImage from 'assets/images/logo.png';

import type * as T from './type';

const Logo = ({ width, className }: T.LogoProps) => {
  return <img src={LogoImage} className={`max-w-[${width}] ${className}`} />;
};

export default Logo;
