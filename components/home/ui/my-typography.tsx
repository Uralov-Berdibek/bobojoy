import React from 'react';

interface MyTypographyProps {
  text: string;
  style: string;
  number?: number;
}

const MyTypography = ({ text, style }: MyTypographyProps) => {
  return <div className={style}>{text}</div>;
};

export default MyTypography;
