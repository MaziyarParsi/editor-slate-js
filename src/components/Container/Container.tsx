import React from 'react';

interface IProps {
  children:React.ReactNode
}

const Container:React.FC<IProps> = ({ children }) => (
  <div className=" container flex-col mx-auto  ">{children}</div>
);

export default Container;
