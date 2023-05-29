import { useContext } from "react";
import { getProducts } from "../products/product";
import { useStore } from "../store";
import blueShoe from "../assets/blueShoe.png";
import { useQuery, gql } from "@apollo/client";

const CATALOGUES = gql`
  {
    shoes {
      data {
        id
        attributes {
          title
          description
          price
          collection
          img
          imgUrl {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;


const Card = ({product}) => {
  const addToCart = useStore((store) => store.addToCart)
//import
  const { loading, error, data } = useQuery(CATALOGUES);

  if (loading) return <p>Loading...</p>;
  if (error) return error + <p>error.message</p>;

  return (
    <div
      className="w-[27rem] h-[18rem] bg-black flex flex-col p-4 justify-between items-center"
      key={product.id}
    >
      <div className="flex gap-4 h-[15rem]">
        <div className="relative">
          <p className="bg-red-700 p-1 w-fit text-sm font-bold text-white absolute top-2 left-2 rounded-lg">
            {product.collection}
          </p>

          <img
            src={product.img}
            alt=""
            className="object-cover h-[12rem] w-[13rem]"
          />
        </div>
        <div className="text-white flex flex-col gap-2">
          <div className="flex flex-col gap-2 mb-auto">
            <h3 className="text-3xl font-semibold">{product.title}</h3>
            <p className="text-yellow-400 text-4xl font-semibold">
              ${product.price}
            </p>
          </div>
          <div className="flex gap-4">
            <img
              src={blueShoe}
              alt=""
              className="h-[5rem] w-[5rem] object-cover"
            />
            <img
              src={blueShoe}
              alt=""
              className="h-[5rem] w-[5rem] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-6">
        <button className="bg-white h-10 font-bold w-[13rem]">Order Now</button>
        <button className="bg-white h-10 font-bold w-[11rem]" onClick={() => {addToCart(product)}}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
