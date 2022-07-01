import styled from "styled-components"

const Cart = () => {

    return(<CartStyled><h1>Cart</h1></CartStyled>)
}


const CartStyled = styled.div`
display: flex;
justify-content: center;
text-align: center;
align-items: center;
h1{
    margin: 5rem;
    font-size: 5rem;
}

`
export default Cart