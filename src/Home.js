import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import { db } from "./firebase";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) => {
      let tempProducts = [];
      snapshot.docs.map((doc) => {
        tempProducts.push({
          id: doc.id,
          product: doc.data(),
        });
      });
      setProducts(tempProducts);
    });
  }, []);

  return (
    <div className="Home">
      <div className="Home-container">
        <div
          className="Home-banner"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/banner.jpg)`,
          }}
        ></div>

        <div className="Home-content">
          <div className="Home-row">
            <div className="category">
              <span className="category-title">Baby & Child Care</span>
              <div className="category-image">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/41Z8XaJ2xAL._AC_SR300,300.jpg"
                  alt="image"
                />
                <p>See More</p>
              </div>
            </div>
            <div className="category">
              <span className="category-title">
                Vitamins & Dietary Supplements
              </span>
              <div className="category-image">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/51sGoo81pJL._AC_SY200_.jpg"
                  alt="image"
                />
                <p>See More</p>
              </div>
            </div>
            <div className="category">
              <span className="category-title">Health & Wellness</span>
              <div className="category-image">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/41X1xSnb9NL._AC_SR300,300.jpg"
                  alt="image"
                />
                <p>See More</p>
              </div>
            </div>
          </div>

          <div className="Home-row">
            {products.slice(0, 2).map(({ id, product }) => (
              <Product
                id={id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            ))}
          </div>
          <div className="Home-row">
            {products.slice(2, 5).map(({ id, product }) => (
              <Product
                id={id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            ))}
          </div>
          <div className="Home-row">
            {products.slice(5, 10).map(({ id, product }) => (
              <Product
                id={id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
