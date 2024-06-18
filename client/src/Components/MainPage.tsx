import Header from "./Header";
import LeftsideComponent from "./LeftsideComponent";
import MiddleComponent from "./MiddleComponent";
import RightsideComponent from "./RightsideComponent";
// import "./index.css";

const MainPage = () => {
  return (
    <div className=" mx-auto ">
      <Header />
      <div className="max-w-[1048px] mx-auto flex-col md:flex md:flex-row gap-4">
        <LeftsideComponent />
        <MiddleComponent />
        <RightsideComponent />
      </div>
    </div>
  );
};

export default MainPage;
