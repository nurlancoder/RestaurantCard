import React from 'react';
import './RestaurantCard.css';

const RestaurantCard = ({ name, imageUrl, rating, cuisine, price, deliveryTime }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star full">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }

    return stars;
  };

  return (
    <div className="restaurant-card">
      <div className="card-image-container">
        <img 
          src={imageUrl} 
          alt={name} 
          className="card-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x200?text=Restoran+Şəkli';
          }}
        />
        <div className="card-overlay">
          <button className="favorite-btn">♡</button>
          {deliveryTime && (
            <span className="delivery-time">{deliveryTime} dəq</span>
          )}
        </div>
      </div>
      
      <div className="card-content">
        <div className="card-header">
          <h3 className="restaurant-name">{name}</h3>
          {price && <span className="price-tag">{price}</span>}
        </div>
        
        <p className="cuisine-type">{cuisine}</p>
        
        <div className="rating-container">
          <div className="stars-container">
            {renderStars(rating)}
          </div>
          <span className="rating-number">{rating}</span>
          <span className="rating-reviews">(120+ rəy)</span>
        </div>
        
        <div className="card-footer">
          <button className="order-btn">
            Sifariş et
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;