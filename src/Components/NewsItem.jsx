const NewsItem = ({ title, description, imageUrl, newsUrl }) => {
  return (
    <div className="card bg-dark text-white mb-3" style={{ maxWidth: "345px" }}>
      {/* Fallback image if the article doesn't provide one */}
      <img 
        src={imageUrl || "https://via.placeholder.com/345x200?text=No+Image"}
        className="card-img-top" 
        alt="News"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        {/* Slicing prevents text from overflowing and ruining the card layout */}
        <h5 className="card-title">{title ? title.slice(0,50) : "No title available"}</h5>
        <p className="card-text">{description ? description.slice(0,100) : "No description available"}</p>
        <a href={newsUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
