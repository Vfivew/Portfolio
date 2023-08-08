import React, { useState } from 'react';
import './Tabs.css';
import tabsData from '../../resources/tabs-image';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('makeup'); 

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tabs-container">
      <h2 className='my-service'>Мої послуги</h2>
        <div className="tabs">
          <div className="tab-items">
            <div className='tabs-services'>
              {tabsData.map((tab) => (
                <TabItem
                  key={tab.id}
                  id={tab.id}
                  title={tab.title}
                  isActive={activeTab === tab.id}
                  onClick={handleTabClick}
                />
              ))}  
            </div>
            <div className="tab-content">
              <TabDescription title={activeTab} />
            </div>
          </div>
          <div className="tab-image">
            <TabContent title={activeTab} />
          </div>
        </div>
    </div>
  );
};

const TabItem = ({ id, title, isActive, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <div className={`tab-item ${isActive ? 'active' : ''}`} onClick={handleClick}>
      {title}
    </div>
  );
};

const TabContent = ({ title }) => {
  const tab = tabsData.find((tab) => tab.id === title); 

  if (!tab) {
    return null; 
  }

  const imageSrc = tab.imageUrl; 

  return (
    <div className="tab-image-item">
      <img src={imageSrc} alt={title} />  
    </div>
  );
};

const TabDescription = ({ title }) => {
  const tab = tabsData.find((tab) => tab.id === title);

  if (!tab) {
    return null;
  }

  const description = tab.text; 

  return (
    <div className="tab-description-item">
      {description}
    </div>
  );
};

export default Tabs;