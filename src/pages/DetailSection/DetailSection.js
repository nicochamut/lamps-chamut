import CardDetail from "../../components/CardDetail/CardDetail";
import { useState, useEffect } from "react";
import { getProductById, getProducts } from "../../components/State/asyncMock";
import { useParams } from "react-router-dom";

const DetailSection = ({setCounterCart , counterCart}) => {
  const [count, setCount] = useState(counterCart)

  useEffect(() => {
setCounterCart(count + 1)

  }, [count])
  return (
    <div>
      <CardDetail setCount={setCount} counterCart={counterCart} />
      
    </div>
  );
};

export default DetailSection;
