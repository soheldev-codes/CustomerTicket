import "./App.css";
import Dashbord from "./Components/Dashbord/Dashbord";
import MainSection from "./Components/MainSection/MainSection";
import NavMenu from "./Components/NavMenu/NavMenu";

import { tickets } from "./Data/Data";

function App() {
  return (
    <div className="">
      <NavMenu />
      <Dashbord tickets={tickets} />
      <MainSection tickets={tickets} />
    </div>
  );
}

export default App;
