import React, { useState } from "react";
import { ProductDetail } from "../components/swr/product-detail";

export default function SwrPage() {
  const [detailList, setDetailList] = useState([1, 1, 1]);
  function handleAddClick() {
    setDetailList((prevList) => [...prevList, 1]);
  }
  return (
    <div>
      <h1>User SWR</h1>
      <button onClick={handleAddClick}>Add detail</button>
      <ul>
        {detailList.map((item, index) => (
          <li key={index}>
            <ProductDetail productId={11}></ProductDetail>
          </li>
        ))}
      </ul>
    </div>
  );
}
