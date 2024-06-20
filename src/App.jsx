import React, { useState } from "react";
import Sidebar from "./components/Sidebar";


function App() {
  const [activeLink, setActiveLink] = useState("Monitor");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const renderContent = () => {
    switch (activeLink) {
      case "Monitor":
        return <div className="p-4">This is the Monitor page.</div>;
      case "Report":
        return <div className="p-4">This is the Report page.</div>;
      case "Notification":
        return <div className="p-4">This is the Notification page.</div>;
      case "User":
        return <div className="p-4">This is the User page.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen">
 
      <div className="flex flex-1">
        <Sidebar activeLink={activeLink} onLinkClick={handleLinkClick} />
        <div className="flex-1 bg-white px-4 overflow-auto">{renderContent()}</div>
      </div>
    </div>
  );
}

export default App;
