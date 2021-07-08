import React from "react";
import "./productspagemen.css";
import { Card } from "../Homepage/productsection";
import { datamenproducts } from "../Data/datahomepage";
import { Usecart } from "../cartpage/cartcontext";

function ProductsPageMen() {
  const { state , searchItems} = Usecart();

  function getSortedData(productList, sortBy) {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return productList.sort((a, b) => b["price"] - a["price"]);
    }

    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return productList.sort((a, b) => a["price"] - b["price"]);
    }
    return productList;
  }

  function getFilteredData(
    productList,
    { showFastDeliveryOnly, showInventoryAll }
  ) {
    return productList
      .filter(({ fastDelivery }) =>
        showFastDeliveryOnly ? fastDelivery : true
      )
      .filter(({ inStock }) => (showInventoryAll ? true : inStock));
  }

  const sortedData = getSortedData(datamenproducts, state.sortBy);

  const filteredData = getFilteredData(sortedData, state);

  return (
    <>
      <div className="product__section__container">
        {filteredData.filter((item) => item.product.includes(searchItems)).map((item) => {
          return <Card {...item} />;
        })}
      </div>
    </>
  );
}

export default ProductsPageMen;

export function SortComponent() {
  const { state, dispatch } = Usecart();
  return (
    <>
      <div className="sort__class">
        <li
          style={{
            listStyleType: "none",
          }}
        >
          <input
            type="radio"
            name="sort"
            onChange={() =>
              dispatch({
                type: "SORT",
                payload: "PRICE_HIGH_TO_LOW",
              })
            }
            checked={state.sortBy && state.sortBy === "PRICE_HIGH_TO_LOW"}
          />
          High - to - low
        </li>
        <li
          style={{
            listStyleType: "none",
          }}
        >
          <input
            type="radio"
            name="sort"
            onChange={() =>
              dispatch({
                type: "SORT",
                payload: "PRICE_LOW_TO_HIGH",
              })
            }
            checked={state.sortBy && state.sortBy === "PRICE_LOW_TO_HIGH"}
          />
          low - to - high
        </li>
        <li
          style={{
            listStyleType: "none",
          }}
        >
          <input
            type="checkbox"
            checked={state.showInventoryAll}
            onChange={() =>
              dispatch({
                type: "TOGGLE_INVENTORY",
              })
            }
          />
          Include-out-of-stock
        </li>
        <li
          style={{
            listStyleType: "none",
          }}
        >
          <input
            type="checkbox"
            checked={state.showFastDeliveryOnly}
            onChange={() =>
              dispatch({
                type: "TOGGLE_DELIVERY",
              })
            }
          />
          Fast-delivery
        </li>
      </div>
    </>
  );
}
