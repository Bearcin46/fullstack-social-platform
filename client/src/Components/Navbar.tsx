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
    <div className="flex items-center justify-between">
      {/* leftside logo with search input */}
      <div className="flex items-center gap-5">
        <h1>Cloudin IN </h1>

        <div className="relative">
          <Search
            className="text-gray-400 absolute top-2 left-1"
            fontSize="small"
          />
          <input
            type="text"
            placeholder="Search"
            className="h-9 px-7 bg-gray-300 py-3 w-full rounded"
          />
        </div>
      </div>

      {/* icons */}
      <div className="flex items-center gap-4 *:text-gray-600 ">
        <Home
          sx={{ fontSize: 36 }}
          className="hover:text-gray-500 cursor-pointer"
        />
        <SupervisorAccount
          sx={{ fontSize: 36 }}
          className="hover:text-gray-500 cursor-pointer"
        />
        <BusinessCenter
          sx={{ fontSize: 36 }}
          className="hover:text-gray-500 cursor-pointer"
        />
        <Chat
          sx={{ fontSize: 36 }}
          className="hover:text-gray-500 cursor-pointer"
        />
        <Notifications
          sx={{ fontSize: 36 }}
          className="hover:text-gray-500 cursor-pointer"
        />
        <Avatar
          sx={{ fontSize: 30 }}
          className="hover:text-gray-500 cursor-pointer "
        />
      </div>
    </div>
  );
};

export default Navbar;
