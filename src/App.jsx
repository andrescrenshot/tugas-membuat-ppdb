import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./component/Homepage";
import Login from "./component/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/V" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
