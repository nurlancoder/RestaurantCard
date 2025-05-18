import React, { useState, useEffect } from 'react';
import RestaurantCard from './components/RestaurantCard/RestaurantCard';
import './App.css';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  const restaurantData = [
    {
      id: 1,
      name: "Şəfa Restoran",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      cuisine: "Azərbaycan mətbəxi",
      price: "₼₼",
      deliveryTime: 25
    },
    {
      id: 2,
      name: "Mangal Evi",
      imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.6,
      cuisine: "Türk mətbəxi",
      price: "₼₼₼",
      deliveryTime: 30
    },
    {
      id: 3,
      name: "Pizza Palace",
      imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.4,
      cuisine: "İtalyan mətbəxi",
      price: "₼₼",
      deliveryTime: 20
    },
    {
      id: 4,
      name: "Sushi Master",
      imageUrl: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.7,
      cuisine: "Yapon mətbəxi",
      price: "₼₼₼",
      deliveryTime: 35
    },
    {
      id: 5,
      name: "Burger House",
      imageUrl: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.2,
      cuisine: "Amerika mətbəxi",
      price: "₼",
      deliveryTime: 15
    },
    {
      id: 6,
      name: "Dəniz Məhsulları",
      imageUrl: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.9,
      cuisine: "Dəniz mətbəxi",
      price: "₼₼₼₼",
      deliveryTime: 40
    }
  ];

  useEffect(() => {
    const loadRestaurants = () => {
      setTimeout(() => {
        setRestaurants(restaurantData);
        setLoading(false);
      }, 1000);
    };

    loadRestaurants();
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <div className="container">
          <h1 className="app-title">🍽️ Restoran Kataloqu</h1>
          <p className="app-subtitle">Ən yaxşı restoranları kəşf edin</p>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Restoranlar yüklənir...</p>
            </div>
          ) : (
            <>
              <div className="stats-bar">
                <span className="stats-item">
                  📍 {restaurants.length} restoran tapıldı
                </span>
                <span className="stats-item">
                  ⭐ Orta reytinq: {(restaurants.reduce((acc, r) => acc + r.rating, 0) / restaurants.length).toFixed(1)}
                </span>
              </div>

              <div className="restaurants-grid">
                {restaurants.map((restaurant, index) => (
                  <div 
                    key={restaurant.id} 
                    className="card-wrapper"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <RestaurantCard 
                      name={restaurant.name}
                      imageUrl={restaurant.imageUrl}
                      rating={restaurant.rating}
                      cuisine={restaurant.cuisine}
                      price={restaurant.price}
                      deliveryTime={restaurant.deliveryTime}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <footer className="app-footer">
        <div className="container">
          <p>&copy; 2024 Restoran Kataloqu. React ilə hazırlanmışdır.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
