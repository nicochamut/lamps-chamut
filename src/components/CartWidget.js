import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const CartWidget = () => {
    return(<CartStyled>
<FontAwesomeIcon icon={faCartShopping} />
    </CartStyled>)
}

const CartStyled = styled.div`
margin-right: 30px;
cursor: pointer;
`

export default CartWidget