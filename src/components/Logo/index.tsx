import { Input } from 'antd';
import { ChangeEventHandler, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../images/Home/logo.png';

interface LogoProps {
  width: string;
  className?: string;
}

const Logo = ({ width, className }: LogoProps) => {
  return (
    <Link to="/">
      <img src={LogoImage} className={`max-w-[${width}] ${className}`} />
    </Link>
  );
};

export default Logo;
