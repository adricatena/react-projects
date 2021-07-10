// import React, { useContext } from "react"; // Usando context con custom hook ahorramos codigo
// import { FaBars } from "react-icons/fa";
// import { AppContext } from "./context";
import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  //const data = useContext(AppContext);
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        Show modal
      </button>
    </main>
  );
};

export default Home;
