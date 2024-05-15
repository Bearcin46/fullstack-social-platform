import Header from "./Components/Header";
import LeftsideComponent from "./Components/LeftsideComponent";
import MiddleComponent from "./Components/MiddleComponent";

import "./index.css";

function App() {
  return (
    <div className=" mx-auto">
      <Header />
      <div className="max-w-[1024px] mx-auto flex-col md:flex md:flex-row gap-4">
        <LeftsideComponent />
        <MiddleComponent />
      </div>
    </div>
  );
}

export default App;
