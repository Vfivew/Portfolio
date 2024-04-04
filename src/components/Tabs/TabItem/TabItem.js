const TabItem = ({ tab }) => {
  return (
    <>
      <div className="tab-content">
        <p className="tab-description-item">{tab.text}</p>
        <p className="tab-info">
          <span className="tab-info-name">Ціна:</span> {tab.price}.
        </p>
        <p className="tab-info">
          <span className="tab-info-name">Тривалість:</span> {tab.duration}.
        </p>
      </div>
      <div className="tab-image">
        <div className="tab-image-item">
          <img src={tab.imageUrl} alt={tab.title} />
        </div>
      </div>
    </>
  );
};

export default TabItem;
