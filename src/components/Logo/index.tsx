import LogoImage from 'assets/images/logo.png';

import * as S from './styled';
import type * as T from './type';

const Logo = ({ className }: T.LogoProps) => {
  return (
    <S.Container>
      <img src={LogoImage} className={`${className}`} />
    </S.Container>
  );
};

export default Logo;
