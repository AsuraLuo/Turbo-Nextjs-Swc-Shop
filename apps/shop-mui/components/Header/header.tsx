"use client";

import { useSelector } from "react-redux";

const Header = () => {
  const value = useSelector((state: any) => state.counter.status);

  return (
    <header>
      <p>header</p>
      {value}
    </header>
  );
};

export default Header;
