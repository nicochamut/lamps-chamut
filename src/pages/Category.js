import {useParams} from "react-router"
import { useState, useEffect } from "react"
import { getProductsByCategory } from "../components/State/asyncMock"
import Item from "../components/Item/Item"


const Category = () => {
    const [data, setData] = useState([])

const {id} = useParams()
console.log(id)

useEffect(() => {
getProductsByCategory(id).then((res) => {
    setData(res)
    console.log(res)
})
}, [id])

    return(<div>{data.map((x) => <Item prop={x} />)}</div>)
}

export default Category 