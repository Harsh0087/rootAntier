import React, { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products.slice(0, 10));
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    
      <div style={styles.container}>
        <h1 style={styles.header}>Product List</h1>
        <div style={styles.productItem}>
          {products.map((rec) => (
            <div key={rec.id}>
              <p>
                <strong>Name:</strong> {rec.title}
              </p>
              <p>
                <strong>Price:</strong> ${rec.price}
              </p>
              <p>
                <strong>Description:</strong> {rec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px",
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  productItem: {
    marginBottom: "12px",
  },
};

export default App;
