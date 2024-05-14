import Header from "./Components/Header";
import LeftsideComponent from "./Components/LeftsideComponent";

import "./index.css";

function App() {
  return (
    <div className=" mx-auto">
      <Header />
      <div className="max-w-[1024px] mx-auto ">
        <LeftsideComponent />
      </div>
    </div>
  );
}

export default App;
