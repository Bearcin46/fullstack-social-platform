import React from "react";

const RightsideComponent = () => {
  return (
    <div className="md:py-4 min-w-[230px] h-fit bg-white px-3 mt-4 rounded-xl">
      {/* ===top=== */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">LinkedIn News</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
          ></path>
        </svg>
      </div>

      {/* subtitle */}
      <div>
        <small className="text-gray-500 font-semibold text-[16px]">
          Top Stories
        </small>
      </div>

      <div className="flex flex-col gap-3">
        {/* story */}
        <div className="hover:bg-slate-200">
          <small className="font-semibold text-[13px]">
            Closing gender gap in insolvency
          </small>
          <div className="flex items-center gap-2">
            <small className="text-slate-400">8h ago</small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.25em"
              height="0.25em"
              viewBox="0 0 24 24"
              className="text-slate-400"
            >
              <path
                fill="currentColor"
                d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2z"
              ></path>
            </svg>
            <small className="text-slate-400">16,205 readers</small>
          </div>
        </div>
        {/* story */}
        <div className="hover:bg-slate-200">
          <small className="font-semibold text-[13px]">
            Babycare booms in city
          </small>
          <div className="flex items-center gap-2">
            <small className="text-slate-400">8h ago</small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.25em"
              height="0.25em"
              viewBox="0 0 24 24"
              className="text-slate-400"
            >
              <path
                fill="currentColor"
                d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2z"
              ></path>
            </svg>
            <small className="text-slate-400">16,205 readers</small>
          </div>
        </div>
        {/* story */}
        <div className="hover:bg-slate-200">
          <small className="font-semibold text-[13px]">
            Foreign firms makes India foray
          </small>
          <div className="flex items-center gap-2">
            <small className="text-slate-400">8h ago</small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.25em"
              height="0.25em"
              viewBox="0 0 24 24"
              className="text-slate-400"
            >
              <path
                fill="currentColor"
                d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2z"
              ></path>
            </svg>
            <small className="text-slate-400">16,205 readers</small>
          </div>
        </div>
        {/* story */}
        <div className="hover:bg-slate-200">
          <small className="font-semibold text-[13px]">
            How to ace in-demand jobs
          </small>
          <div className="flex items-center gap-2">
            <small className="text-slate-400">8h ago</small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.25em"
              height="0.25em"
              viewBox="0 0 24 24"
              className="text-slate-400"
            >
              <path
                fill="currentColor"
                d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2z"
              ></path>
            </svg>
            <small className="text-slate-400">16,205 readers</small>
          </div>
        </div>
        {/* story */}
        <div className="hover:bg-slate-200">
          <small className="font-semibold text-[13px]">
            Women bet big on softskill
          </small>
          <div className="flex items-center gap-2">
            <small className="text-slate-400">8h ago</small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.25em"
              height="0.25em"
              viewBox="0 0 24 24"
              className="text-slate-400"
            >
              <path
                fill="currentColor"
                d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2z"
              ></path>
            </svg>
            <small className="text-slate-400">16,205 readers</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightsideComponent;
