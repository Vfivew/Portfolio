import React, { useState, useEffect } from 'react';
import './Tabs.css';
import tabsData from '../../resources/tabs-image';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('makeup');
  const [tabImageOpacity, setTabImageOpacity] = useState(1);

  const handleTabClick = (tabId) => {
    setTabImageOpacity(0); 
    setTimeout(() => {
      setActiveTab(tabId);
    }, 500);
  };

  useEffect(() => {
    setTabImageOpacity(1); 
  }, [activeTab]);

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
        <div className="tab-image" style={{ opacity: tabImageOpacity }}>
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

const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    onClick(id);
  }
};

  return (
    <div className={`tab-item ${isActive ? 'active' : ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0} 
    >
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