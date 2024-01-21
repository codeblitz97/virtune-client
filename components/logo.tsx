import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/">
      <span className="flex items-center space-x-2 text-2xl font-medium text-cyan-500 dark:text-gray-100">
        <span>
          <div className="bg-cyan-600 text-white h-[35px] w-[35px] flex items-center justify-center rounded-md">
            <span>V</span>
          </div>
        </span>
        <span>Virtune</span>
      </span>
    </Link>
  );
};

export default Logo;
