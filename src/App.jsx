import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./component/Homepage";
import Login from "./component/Login";
import Sidnav from "./component/Sidnav";
import Menu1 from "./component/Menu1/Menu1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/V" element={<Login />} />
        <Route path="/Q" element={<Sidnav />} />
        <Route path="/D" element={<Menu1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
