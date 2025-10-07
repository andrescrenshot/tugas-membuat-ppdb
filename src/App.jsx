import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./component/Homepage";
import Login from "./component/Login";
import Menu1 from "./component/Menu1/Menu1";
import Tambahdatamenu1 from "./component/Menu1/tambahdatamenu1";
import Editdatamenu1 from "./component/Menu1/editdatamenu1";
import Dashboard from "./component/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/V" element={<Login />} />
        <Route path="/T" element={<Dashboard />} />
        <Route path="/D" element={<Menu1 />} />
        <Route path="/E" element={<Tambahdatamenu1 />} />
        <Route path="/edit/:id" element={<Editdatamenu1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
