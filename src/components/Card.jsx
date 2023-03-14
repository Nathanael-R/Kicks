import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { getProducts } from "../products/product"
const Card = (props) => {
    const cart = useContext(CartContext)
    const id = props.id
    const quantity = props.quantity
    const products = getProducts(id)
    return (
    <div className="my-8">
        <img src={products.image} alt="" srcset="" />
        <hr />
        <p className="text-2xl font-bold">{products.title}</p>
        <p className="text-xl">{products.desc}</p>
        <p className="text-2xl font-bold">${products.price}</p>
    </div>
  )
}

export default Card