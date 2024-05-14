import {
  BusinessCenter,
  Chat,
  Home,
  Notifications,
  Search,
  SupervisorAccount,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between sm:max-w-[1024px] mx-auto">
      {/* leftside logo with search input */}
      <div className="flex  gap-4 items-center">
        <img
          src="https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png"
          alt="logo"
          className="cursor-pointer h-9 w-9 rounded"
        />

        <div className="relative">
          <Search
            className="text-gray-400 absolute top-2 left-1"
            fontSize="small"
          />
          <input
            type="text"
            placeholder="Search"
            className="h-9 px-7 bg-blue-100 py-3 w-full rounded"
          />
        </div>
      </div>

      {/* icons */}
      <div className="flex items-center gap-8 lg:gap-14 *:text-gray-600 ">
        {/* home icon */}
        <div className="flex flex-col cursor-pointer relative items-center">
          <Home
            sx={{ width: 30, height: 30 }}
            className="hover:text-gray-500 "
          />
          <small className="hidden md:block">Home</small>
          <div className="w-10 md:w-20 md:left-[-19px] left-[-3px] h-[2.5px] bg-black absolute bottom-[-12px] md:bottom-[-10px]"></div>
        </div>

        {/* my network icon */}
        <div className="flex flex-col items-center cursor-pointer">
          <SupervisorAccount
            sx={{ width: 30, height: 30 }}
            className="hover:text-gray-500 "
          />
          <small className="hidden md:block">My Network</small>
        </div>

        {/* jobs icon */}
        <div className="flex flex-col items-center cursor-pointer">
          <BusinessCenter
            sx={{ width: 30, height: 30 }}
            className="hover:text-gray-500 "
          />
          <small className="hidden md:block">Jobs</small>
        </div>

        {/* message icon */}
        <div className="flex flex-col items-center cursor-pointer">
          <Chat
            sx={{ width: 29, height: 28 }}
            className="hover:text-gray-500 "
          />
          <small className="hidden md:block">Messaging</small>
        </div>

        {/* notification icon */}
        <div className="flex flex-col items-center cursor-pointer">
          <Notifications
            sx={{ width: 30, height: 30 }}
            className="hover:text-gray-500 "
          />
          <small className="hidden md:block">Notifications</small>
        </div>

        {/* Avatar */}
        <div className="flex flex-col items-center cursor-pointer">
          <Avatar
            sx={{ width: 28, height: 28 }}
            className="hover:text-gray-500  "
            src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-03/24/full/1648127845-5808.jpg"
          />
          <div className="md:flex  items-center hidden ">
            <small>Me</small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="m7 10l5 5l5-5z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
