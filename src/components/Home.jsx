import React from "react";
import productList from "../data/data.js";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });

    toast.success("Added To Cart");
  };

  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          name={i.name}
          price={i.price}
          imgSrc={i.imgSrc}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => {
  return (
    <div className="productCard">
      <img src={imgSrc} alt="" />
      <p>{name}</p>
      <h4>₹{price}</h4>
      <button onClick={() => handler({ name, id, price, imgSrc, quantity: 1 })}>
        Add to cart
      </button>
    </div>
  );
};

export default Home;
