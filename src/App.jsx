import { useState, useEffect } from "react";
import "./App.css";
import Groups from "./pages/Groups";
import GroupDetail from "./pages/GroupDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import { gapi } from "gapi-script";
import ProtectedRoute from "./ProtectedRoutes";
import Auth from "./pages/Auth";

const VITE_GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {" "}
          <Route path="/group/:id" element={<ProtectedRoute><GroupDetail /></ProtectedRoute>}></Route>
          <Route path="/" element={<Groups />}></Route>
          {/* <Route path="/logout" element={<Logout />}></Route> */}
          <Route path="/auth" element={<Auth />}></Route>

        </Routes>
      </BrowserRouter>
      <Login />
      {/* <Logout /> */}
    </>
  );
}

export default App;
