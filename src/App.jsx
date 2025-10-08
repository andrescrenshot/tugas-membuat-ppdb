import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./component/Homepage";
import Login from "./component/Login";
import Menu1 from "./component/Menu1/Menu1";
import Tambahdatamenu1 from "./component/Menu1/tambahdatamenu1";
import Editdatamenu1 from "./component/Menu1/editdatamenu1";
import Menu2 from "./component/Menu2/Menu2"
import Tambahmenu2 from "./component/Menu2/Tambahmenu2"
import Editmenu2 from "./component/Menu2/Editmenu2"
import Dashboard from "./component/dashboard";
import Register from "./component/Register"
import Profile from "./component/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/V" element={<Login />} />
        <Route path="/T" element={<Dashboard />} />
        <Route path="/P" element={<Register />} />
        <Route path="/L" element={<Profile />} />

        <Route path="/D" element={<Menu1 />} />
        <Route path="/E" element={<Tambahdatamenu1 />} />
        <Route path="/1edit/:id" element={<Editdatamenu1 />} />

        <Route path="/S" element={<Menu2 />} />
        <Route path="/C" element={<Tambahmenu2 />} />
        <Route path="/Menu2edit/:id" element={<Editmenu2 />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
