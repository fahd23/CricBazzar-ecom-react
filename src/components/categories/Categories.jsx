import React from "react";
import "components/categories/categories.css";
import { categories } from "backend/db/categories";
import { Link } from "react-router-dom";

const Categories = () => (
  <>
    <div>
      <h1 className="section-title">CATEGORIES</h1>
      <section className="grid-container">
        <div className="card-display-container">
          {categories.map((category) => {
            const { _id, categoryName, img, description } = category;
            return (
              <Link to={`/products?categories=${categoryName}`}>
                <div
                  className="card vertical-card-container card-with-shadow"
                  key={_id}
                >
                  <div className="card-img">
                    <img
                      className="vertical-card-img"
                      src={img}
                      alt={description}
                    />
                  </div>
                  <div className="card-info">
                    <h2 className="card-title">{description}</h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  </>
);

export default Categories;
