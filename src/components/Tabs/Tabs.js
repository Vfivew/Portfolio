import { useState } from "../../hook/hooks";
import tabsData from "../../resources/tabs-image";
import TabItem from "./TabItem/TabItem";
import "./Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("makeup");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tabs-container">
      <h2 className="my-service">Мої послуги</h2>
      <div className="tabs-wrapper">
        <div className="tabs-title">
          {tabsData.map((tab) => (
            <div
              key={tab.id}
              className={`tab-item ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
              tabIndex={0}
            >
              {tab.title}
            </div>
          ))}
        </div>
        <div className="tabs-services">
          <TabItem
            tab={tabsData.find((tab) => tab.id === activeTab)}
            isActive={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
