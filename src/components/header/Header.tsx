import MenuIcon from "../icons/Menu";
import ChevronUpIcon from "../icons/Chevron-up";
import { useState } from "react";
import classNames from "classnames";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const headerItems = [
    "Download CSV",
    "Configure Admission Process",
    "Reset All Open Seats",
    "Change Seat Allocation Status",
  ];
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-[16px] text-dark-10 font-bold max-w-[791px]">
        <h1 className="text-2xl lg:text-heading-1">Seat Management</h1>
        <h2 className="text-xl lg:text-heading-2">Admission Process Name</h2>
        <h3 className="text-lg lg:text-heading-3">School Name</h3>
        <p className="font-normal text-2xl">
          The number of offers made to students in the lottery depends on the
          number of seats you declare.
        </p>
      </div>
      <div className="relative group">
        <div
          className="shrink-0 flex cursor-pointer"
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          <MenuIcon style={{ transform: "translateY(-2px)" }} />
          <span className="pl-[8px] pr-[4px] font-bold text-sm">Actions</span>
          <ChevronUpIcon isMenuOpen={isMenuOpen} />
        </div>
        {isMenuOpen && (
          <div
            className="absolute right-0 rounded-lg bg-white border border-[#C6D0DB]
          w-[290px] text-dark-10 flex flex-col py-[12px] px-[1px]
          "
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            {headerItems.map((item, index) => (
              <a
                href="#"
                className="flex py-[10px] justify-center text-sm hover:bg-secondary-20
               "
                key={index}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
