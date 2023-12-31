import { useState } from "react";
import "./App.css";
import Groups from "./pages/Groups";
import GroupDetail from "./pages/GroupDetail";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/group/:id" element={<GroupDetail />}></Route>
          <Route path="/" element={<Groups />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
