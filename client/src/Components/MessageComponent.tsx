import { Avatar } from "@mui/material";

const MessageComponent = () => {
  return (
    <>
      <div className="bg-white mt-4 rounded-md px-4 py-4 ">
        {/*===================== top =========== */}
        <div className="flex justify-between">
          <div className="flex  gap-3">
            {/* ================left========= */}
            {/* picture */}
            <Avatar
              src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-03/24/full/1648127845-5808.jpg"
              className="cursor-pointer"
              sx={{ width: 50, height: 50 }}
            />

            {/* details */}
            <div>
              <div className="flex items-center gap-1 h-[14px] ">
                {/* name */}
                <small className="font-semibold text-[16px] cursor-pointer">
                  Bearcin Sweety
                </small>
                {/* svg */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.25em"
                  height="0.25em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2z"
                  ></path>
                </svg>
                {/* coonection type */}
                <small className="">1st+</small>
              </div>

              {/* title */}
              <div className="">
                <small>
                  Full Stack Developer: Typescript | Nodejs | React | MongoDB
                </small>
              </div>

              {/* time */}
              <div className="flex gap-1 items-center">
                <small>12hr</small>
                {/* dot */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.25em"
                  height="0.25em"
                  viewBox="0 0 24 24"
                  className="text-gray-600"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2z"
                  ></path>
                </svg>
                {/* globe */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="text-gray-600"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="12" r="9"></circle>
                    <path
                      fill="currentColor"
                      d="M13.5 6h.5a2 2 0 0 0 2-2C8.4 1.2 4.5 6.5 3.5 9.5l4.167 5.093c.215.263.333.593.333.933C8 16.34 8.673 17 9.487 17c.828 0 1.513.672 1.513 1.5V21c2.167-.167 6.8-1.2 8-4h-1a2 2 0 0 1-2-2a2 2 0 0 0-2-2h-2a2 2 0 0 1-2-2v-1a1 1 0 0 1 1-1a1 1 0 0 0 1-1v-.5A1.5 1.5 0 0 1 13.5 6"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          {/* =================right=================== */}
          {/* menu */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 14 14"
            className="cursor-pointer hover:text-gray-600"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="7" cy="7" r="1.5"></circle>
              <circle cx="12.25" cy="7" r="1.25"></circle>
              <circle cx="1.75" cy="7" r="1.25"></circle>
            </g>
          </svg>
        </div>

        {/* ===================message========== */}

        <div className="bg-white mt-3 px-1">
          <p className="text-[14px] text-wrap">Hi hello how are you</p>

          {/* likes total */}
          <div className="mt-3">
            {/* like shoud appear here */}
            im comment
          </div>

          <hr className="mt-3 " />

          {/*================ reactions====== */}
          <div className="flex items-center justify-between px-10 mt-3">
            {/* like */}

            <div className="flex gap-1 items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                className="text-gray-700  "
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 10v12m8-16.12L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88"
                ></path>
              </svg>

              <small className="text-gray-700 font-semibold text-[14px]">
                Like
              </small>
            </div>

            {/* comment */}

            <div className="flex gap-1 items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 22 22"
                className="text-gray-700"
              >
                <path
                  fill="currentColor"
                  d="M2 2h18v1h1v14h-1v1h-8v1h-1v1h-1v1H6v-3H2v-1H1V3h1zm1 2v12h5v3h1v-1h1v-1h1v-1h8V4zm2 3h12v2H5zm0 4h10v2H5z"
                ></path>
              </svg>
              <small className="text-gray-700 font-semibold text-[14px]">
                Comment
              </small>
            </div>

            {/* repost */}

            <div className="flex gap-1 items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                className="text-gray-700"
              >
                <path
                  fill="currentColor"
                  d="M7 7h10v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79a.5.5 0 0 0-.85.36V5H6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7zm10 10H7v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79a.5.5 0 0 0 .85-.36V19h11c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1v3z"
                ></path>
              </svg>
              <small className="text-gray-700 font-semibold text-[14px]">
                Repost
              </small>
            </div>

            {/* share*/}

            <div className="flex gap-1 items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                className="text-gray-700"
              >
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634L21.044 2.32c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8l-8 6z"
                ></path>
              </svg>
              <small className="text-gray-700 font-semibold text-[14px]">
                Share
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageComponent;
