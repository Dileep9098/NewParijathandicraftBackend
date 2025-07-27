import React from 'react';
import './PageNotFound.css'; // Create a CSS file for styling

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <img 
          src="/assets/img/empty-search.jpg" 
          alt="Page Not Found"
          className="not-found-image"
        />
        <h1 className="not-found-title">Oops! Page Not Found</h1>
        <p className="not-found-description">
          We couldn't find the page you are looking for. Please check the URL or go back to the home page.
        </p>
        <a href="/" className="back-home-link">Go to Home</a>
      </div>
    </div>
  );
};

export default PageNotFound;
