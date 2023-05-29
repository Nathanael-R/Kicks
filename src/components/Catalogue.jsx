import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQuery, gql } from "@apollo/client";
import { useStore } from "../store";
import Card from "./Card";
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
    <section className="h-[100vh] py-28 flex flex-col snap-start px-44">
      <h2 className="text-6xl mb-8">All Shoes</h2>
      <div className="flex flex-wrap gap-4">
        {data.shoes.data.map((product) => (
          <Card key={product.id} product={product.attributes}/>
        ))}
      </div>
    </section>
  );
};

export default Catalogue;
