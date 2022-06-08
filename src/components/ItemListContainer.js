import styled from "styled-components"


const ItemListContainer = ({title, img, paragraph}) => {

return(
  <ListStyled>
      <CartStyled>
      <img src={img} />
      <div>
      <h1>{title}</h1>
      
      <h4>{paragraph}</h4>
      </div>
      </CartStyled>
 </ListStyled>)

}

const ListStyled = styled.div`
margin: 30px;
border-radius: 0ex;
box-shadow: 1px 3px 14px  #1a1a1a;
background: #9f8e84;
width: 30rem;
color: #3e1e05;
img{
    height: 30rem;
}
`

const CartStyled = styled.div`
display: flex;
div{
    h1{
        text-align: center;
        background: #d2c9b8;
        width: 100%;
        box-shadow: 1px 1px 2px  #1a1a1a;
    }
    h4{
        margin: 10px;
    }
}



`

export default ItemListContainer