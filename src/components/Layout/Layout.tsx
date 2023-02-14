import React from 'react';

interface IProps {
  children:React.ReactNode
}

const DashboardLayout:React.FC<IProps> = ({ children }) => (
  <div className="min-h-screen font-vazir  ">
    <div
      className=" p-4 min-h-screen bg-main dark:bg-mainDark dark:text-primaryDark "
    >
      {children}
    </div>
  </div>
);

export default DashboardLayout;
