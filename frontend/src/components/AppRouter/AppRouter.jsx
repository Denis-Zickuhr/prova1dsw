import { Route, BrowserRouter, Routes } from "react-router-dom";
import React from "react";
import SideNav from "../SideNav/SideNav";
import Register from "../../pages/Register/Register";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SideNav />}>
            <Route path="/new" element={<Register />}/>
            <Route path="/other" element={<div>Teste</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
