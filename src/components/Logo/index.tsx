import LogoImage from 'assets/images/logo.png';

import type * as T from './type';

const Logo = ({ className }: T.LogoProps) => {
  return (
    <div className={`w-full flex`}>
      <img src={LogoImage} className={`${className}`} />
    </div>
  );
};

export default Logo;
