import React, { useState } from "react";
const TabContent = ({ content }) => {
  return <div>{content}</div>;
};
const Alert = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="w-[100%] m-auto h-[600px] bg-[#FFF]">
        <div className="w-[90%] m-auto  bg-[#FFF]">
          <div className="h-5"></div>

          <div className="tab-buttons">
          <div className="w-[80%] h-[50px]" style={{ boxShadow: "0px 4px 4px 0px #00000040",borderRadius: "15px 15px 0 0" }}>

              <button
                className={`h-[100%] w-[150px] ${
                  activeTab === 0 ? "bg-[#E4EBFB] active" : "bg-white"
                }`}
                style={{ borderRadius: "15px 15px 0 0" }}
                onClick={() => handleTabClick(0)}
              >
                Show All
              </button>
              <button
                className={`h-[100%] w-[150px] ${
                  activeTab === 1 ? "bg-[#E4EBFB] active" : "bg-white"
                }`}
                style={{ borderRadius: "15px 15px 0 0" }}
                onClick={() => handleTabClick(1)}
              >
                Error
              </button>
              <button
                className={`h-[100%] w-[150px] ${
                  activeTab === 2 ? "bg-[#E4EBFB] active" : "bg-white"
                }`}
                style={{ borderRadius: "15px 15px 0 0" }}
                onClick={() => handleTabClick(2)}
              >
                Warning
              </button>
              <button
                className={`h-[100%] w-[150px] ${
                  activeTab === 3 ? "bg-[#E4EBFB] active" : "bg-white"
                }`}
                style={{ borderRadius: "15px 15px 0 0" }}
                onClick={() => handleTabClick(3)}
              >
                Trouble Solved
              </button>
            </div>
            <div>

            </div>
          </div>

          <div className="h-5"></div>

          <div className="tab-content">
            {activeTab === 0 && (
              <TabContent content="This is content for Tab 1" />
            )}
            {activeTab === 1 && (
              <TabContent content="This is content for Tab 2" />
            )}
            {activeTab === 2 && (
              <TabContent content="This is content for Tab 3" />
            )}
            {activeTab === 3 && (
              <TabContent content="This is content for Tab 4" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Alert;
