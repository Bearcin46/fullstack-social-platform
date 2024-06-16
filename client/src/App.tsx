import { Outlet } from "react-router-dom";
import Form from "./Components/Form/Form";
import "./index.css";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
