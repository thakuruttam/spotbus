import { useState } from "react";
import { Dropdown } from "./Components/Dropdown";
import SimpleMap from "./Components/Map";

function App() {
  const [route, setRoute] = useState("BOS2_3@AM");
  return (
    <div>
      <div className="text-container">
        <h3 className="admin-dash">Admin Dashboard </h3>
        <Dropdown route={route} setRoute={setRoute} />
      </div>
      <SimpleMap route={route} />
    </div>
  );
}

export default App;
