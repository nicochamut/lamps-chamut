import styled from "styled-components"
import { Link } from "react-router-dom"

const PurchaseButton = () => {

    return (<PurchaseStyled>
 <Link className="link" to="/cart"> <Button> Finish the order. </Button> </Link>
        </PurchaseStyled>)
}


const PurchaseStyled = styled.div`
.link{
    list-style: none ;
    text-decoration: none ;
    color: white;
    
}
`



const Button = styled.div`
display: flex ;
justify-content: center ;
align-items: center ;
background: red;
border-radius: 1rem ;
width: 10rem;
height: 3rem;
text-align: center;
cursor: pointer;
margin-bottom: 2rem;
&:hover{
    background: #65011b;
}
`


export default PurchaseButton