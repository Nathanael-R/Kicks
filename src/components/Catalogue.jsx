import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blueShoe from "../assets/blueShoe.png";
import { useQuery, gql } from "@apollo/client";
//import
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

const Catalogue = () => {
  const { loading, error, data } = useQuery(CATALOGUES);

  if (loading) return <p>Loading...</p>;
  if (error) return error + <p>error.message</p>;

  const notif = () => {
    return toast.success("Added to Cart", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <section className="h-[100vh] px-48 py-28 flex flex-col snap-start">
      <h2 className="text-6xl mb-8">All Shoes</h2>
      <div className="flex flex-wrap gap-4">
        {data.shoes.data.map((shoe) => (
          <div
            className="w-[27rem] h-[18rem] bg-black flex flex-col p-4 justify-between items-center"
            key={shoe.id}
          >
            <div className="flex gap-4 h-[15rem]">
              <div className="relative">
                <p className="bg-red-700 p-1 w-fit text-sm font-bold text-white absolute top-2 left-2 rounded-lg">
                  {shoe.attributes.collection}
                </p>

                <img
                  src={shoe.attributes.img}
                  alt=""
                  className="object-cover h-[12rem] w-[13rem]"
                />
              </div>
              <div className="text-white flex flex-col gap-2">
                <div className="flex flex-col gap-2 mb-auto">
                  <h3 className="text-3xl font-semibold">
                    {shoe.attributes.title}
                  </h3>
                  <p className="text-yellow-400 text-4xl font-semibold">
                    ${shoe.attributes.price}
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
              <button className="bg-white h-10 font-bold w-[13rem]">
                Order Now
              </button>
              <button className="bg-white h-10 font-bold w-[11rem]">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalogue;
