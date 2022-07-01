import CardDetail from "../../components/CardDetail/CardDetail";
import { useState, useEffect } from "react";
import { getProductById, getProducts } from "../../components/State/asyncMock";
import { useParams } from "react-router-dom";

const DetailSection = ({setCounterCart , counterCart}) => {
  const [count, setCount] = useState(counterCart)

//  const addToCounter = (num) => {
//   setCounterCart(counterCart + count)
//  }

   useEffect(() => {

  }, [count])
  return (
    <div>
      <CardDetail setCounterCart={setCounterCart} counterCart={counterCart}/>
    </div>
  );
};

export default DetailSection;

// addToCounter={addToCounter} counterCart={counterCart} 