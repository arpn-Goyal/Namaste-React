
const Shimmer = () => {
  return (
    <div className="res-container shimmer-container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-image"></div>
            <div className="shimmer-line shimmer-title"></div>
            <div className="shimmer-line shimmer-rating"></div>
            <div className="shimmer-line shimmer-cuisine"></div>
            <div className="shimmer-line shimmer-location"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
