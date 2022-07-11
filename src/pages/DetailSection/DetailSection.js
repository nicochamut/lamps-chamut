import CardDetail from "../../components/CardDetail/CardDetail";

const DetailSection = ({ setCounterCart, counterCart }) => {
  return (
    <div>
      <CardDetail setCounterCart={setCounterCart} counterCart={counterCart} />
    </div>
  );
};

export default DetailSection;
