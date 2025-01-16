
import React from "react";
import ManagementConsulting from "./components/page";

const page = () => {
  return (
    <div
      className="flex flex-col min-h-screen "
    >
      <main className="flex-1 bg-white/30 -sm p-6 ">
        <ManagementConsulting />
      </main> 
    </div>
  );
};

export default page;
