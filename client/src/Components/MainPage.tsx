import Header from "./Header";
import LeftsideComponent from "./LeftsideComponent";
import MiddleComponent from "./MiddleComponent";
import "./index.css";

const MainPage = () => {
  return (
    <div className=" mx-auto">
      <Header />
      <div className="max-w-[1024px] mx-auto flex-col md:flex md:flex-row gap-4">
        <LeftsideComponent />
        <MiddleComponent />
        <LeftsideComponent />
      </div>
    </div>
  );
};

export default MainPage;
