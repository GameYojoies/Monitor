import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  const [activeLink, setActiveLink] = useState("Monitor");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const renderContent = () => {
    switch (activeLink) {
      case "Monitor":
        return <div className="p-4">This is the Monitor page.</div>;
      case "Home":
        return <div className="p-4">This is the Home page.</div>;
      case "Services":
        return <div className="p-4">This is the Services page.</div>;
      case "About":
        return <div className="p-4">This is the About page.</div>;
      case "Contact":
        return <div className="p-4">This is the Contact page.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen">
 
      <div className="flex flex-1">
        <Sidebar activeLink={activeLink} onLinkClick={handleLinkClick} />
        <div className="flex-1 bg-white p-4 overflow-auto">{renderContent()}</div>
      </div>
    </div>
  );
}

export default App;
