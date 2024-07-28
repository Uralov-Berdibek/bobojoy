import Link from 'next/link';
import React from 'react';

interface MyButtonProps {
  text: string;
  style: string;
  link: string;
}

const MyButton = ({ text, style, link }: MyButtonProps) => {
  return (
    <Link href={link} className={style}>
      {text}
    </Link>
  );
};

export default MyButton;
