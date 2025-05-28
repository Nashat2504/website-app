import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Recommend.css';

const Recommend = () => {
  const [recommendedItems, setRecommendedItems] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId") || "guest";

    fetch(`http://localhost:5000/api/recommendations?userId=${userId}`)
      .then(res => res.json())
      .then(data => {
        const unique = Array.from(
          new Map(data.map(item => [item.id, item])).values()
        );
        setRecommendedItems(unique);
      })
      
      .then(data => setRecommendedItems(data))
      .catch(err => console.error("Failed to fetch recommendations", err));
  }, []);

 // if (!recommendedItems.length) return null;

  return (
    <div className="recommend-section">
      <h2>✨ Recommendations For You ✨</h2>
      <div className="recommend-items">
        {recommendedItems.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommend;
