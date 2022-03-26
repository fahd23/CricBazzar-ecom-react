import React from "react";
import "components/categories/categories.css";
import { categories } from "backend/db/categories";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div>
        <h1 className="section-title">CATEGORIES</h1>
        <section className="grid-container">
          <div className="card-display-container">
            {categories.map((category) => (
              <Link to="/products">
                <div
                  className="card vertical-card-container card-with-shadow"
                  key={category._id}
                >
                  <div className="card-img">
                    <img
                      className="vertical-card-img"
                      src={category.img}
                      alt={category.description}
                    />
                  </div>
                  <div className="card-info">
                    <h2 className="card-title">{category.categoryName}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Categories;
