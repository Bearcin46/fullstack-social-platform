import { Avatar } from "@mui/material";

const LeftsideComponent = () => {
  return (
    <div className="md:py-4">
      {/* top */}
      <div className="bg-white rounded-xl">
        <div className="flex flex-col items-center overflow-hidden ">
          <img
            src="https://i.pinimg.com/originals/76/e9/23/76e9238fca30a0fc41b6f5fac75b516b.jpg"
            alt="bg-image"
            className="bg-red-600 w-full rounded-t-xl object-cover h-24 "
          />
          <Avatar
            src="https://img.freepik.com/free-photo/portrait-young-happy-business-woman-with-laptop-with-win-gesture_231208-245.jpg"
            className=" inset-y-[-40px] border-2 border-white objec-cover"
            sx={{ width: 78, height: 78 }}
          />

          <h5 className="mt-[-20px] font-semibold">Bearcin Sweety</h5>
          <small className="mt-1 mb-5 text-gray-500 text-md">
            Full Stack Engineer | React JS
          </small>
        </div>
        <hr />
        <div className="flex gap-3 md:flex md:justify-between items-end px-3 md:px-5  mt-2 ">
          <small className="font-semibold text-gray-500">Profile viewers</small>
          <small className="text-blue-600 font-semibold">239</small>
        </div>
        <div className="flex gap-3 md:flex md:justify-between items-end px-3 md:px-5 mb-2 mt-1">
          <small className="font-semibold text-gray-500">
            Post impressions
          </small>
          <small className="text-blue-600 font-semibold">2319</small>
        </div>
        <hr />
        <div className="mt-1 flex flex-col">
          <small className="px-3  md:px-5 text-gray-600">
            Accelerate your career with Premium
          </small>
          <small className="px-3 mb-2  font-semibold md:px-5">Try for $0</small>
        </div>
        <hr />
        <div className="flex gap-2 py-2 px-3 items-center md:px-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="text-gray-600"
          >
            <path
              fill="currentColor"
              d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3l7 3V5c0-1.1-.9-2-2-2z"
            ></path>
          </svg>
          <small className="font-semibold text-gray-600">Saved Items</small>
        </div>
      </div>
    </div>
  );
};

export default LeftsideComponent;
