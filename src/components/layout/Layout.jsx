import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="py-10 bg-gray-900 max-h-screen overflow-auto">
      {children}
    </div>
  );
};

export default Layout;
