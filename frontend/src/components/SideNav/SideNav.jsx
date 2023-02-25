import React from "react";
import "./SideNav.css";
import { Link, Outlet } from "react-router-dom";

const SideNav = () => {
  const SideBar = () => {
    function openSideMenu() {
      document.getElementById("nav-a").style.width = "250px";
      document.getElementById("nav-b").style.width = "0px";
    }

    function closeSideMenu() {
      document.getElementById("nav-a").style.width = "0px";
      document.getElementById("nav-b").style.width = "100px";
    }
    return (
      <>
        <div id="nav-a" className="sidenav">
          <a className="closebtn" onClick={closeSideMenu}>
            &#8592;
          </a>
          <Link to="/new">Novo</Link>
          <Link to="/other">Outra</Link>
        </div>
        <div id="nav-b" className="sidebar">
          <a className="openbtn" onClick={openSideMenu}>
            &#8594;
          </a>
        </div>
      </>
    );
  };

  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
};

export default SideNav;
