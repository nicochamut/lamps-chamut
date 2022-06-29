import CardDetail from "../../components/CardDetail/CardDetail";
import { useState, useEffect } from "react";
import { getProductById, getProducts } from "../../components/State/asyncMock";
import { useParams } from "react-router-dom";

const DetailSection = () => {
  return (
    <div>
      <CardDetail />
    </div>
  );
};

export default DetailSection;
