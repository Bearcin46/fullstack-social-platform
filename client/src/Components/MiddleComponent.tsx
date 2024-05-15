import { Avatar } from "@mui/material";
import React from "react";

const MiddleComponent = () => {
  return (
    <div className="md:mt-4 py-5 rounded-xl bg-white w-full h-fit">
      <div className="flex items-center gap-2 px-5 ">
        <Avatar
          src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-03/24/full/1648127845-5808.jpg"
          className=""
          sx={{ width: 50, height: 50 }}
        />
        <input
          type="text"
          placeholder="Start a post"
          className="py-2 px-5 rounded-full border-[1.5px] border-gray-400 placeholder-gray-400 font-semibold w-full"
        />
      </div>

      {/* icons */}
      <div className="flex px-10 justify-between items-center mt-5">
        <div className="flex gap-1 items-end cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className="text-blue-600 rounded-xl"
          >
            <path
              fill="currentColor"
              d="M6 17h12l-3.75-5l-3 4L9 13zm-3 4V3h18v18zm2-2h14V5H5zm0 0V5zm3.5-9q.625 0 1.063-.437T10 8.5t-.437-1.062T8.5 7t-1.062.438T7 8.5t.438 1.063T8.5 10"
            ></path>
          </svg>
          <small className="font-semibold text-[15px] text-gray-500">
            Media
          </small>
        </div>

        <div className="flex gap-1 items-end cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className="text-yellow-700 "
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20m0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20m5-9H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m-2 4H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2M9 9h6a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2"
            ></path>
          </svg>
          <small className="font-semibold text-[15px] text-gray-500">
            Contribute expertise
          </small>
        </div>
        <div className="flex gap-1 items-end cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            className="text-orange-400"
          >
            <path
              fill="currentColor"
              d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M7 4.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-.861 1.542l1.33.886l1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V7.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V7s1.54-1.274 1.639-1.208M5 9h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1"
            ></path>
          </svg>
          <small className="font-semibold text-[15px] text-gray-500">
            Write Article
          </small>
        </div>
      </div>
    </div>
  );
};

export default MiddleComponent;
