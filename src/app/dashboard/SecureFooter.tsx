import React from "react";
import { LogoBrand } from "../../utils/Logo";

const Footer = () => {
  const todaysDate = new Date().getFullYear();

  return (
    <div className="text-xs shadow-md bg-primaryBlue ">
      <div className="">
        <div className="flex flex-shrink-0 p-4 justify-center bg-primaryBlue items-center">
          <div className="bg-white p-4 rounded-sm">
            <LogoBrand />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
