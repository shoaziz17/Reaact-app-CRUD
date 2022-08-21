import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../shared_components/Layout";
import { ProductContext } from "../../utilities/productContext";
function Store() {
  const { cardGame } = useContext(ProductContext);

  const totalSum = () => {
    let sum = 0;
    cardGame.map((item) => (sum += item.price));
    return sum;
  };

  return (
    <>
      <Layout>
        <div className="fixed z-50 right-0 bottom-0  bg-green-600 inline-block px-5 py-3 rounded ">
          <h1 className="text-white font-semibold">Total sum: {totalSum()}$</h1>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {cardGame.map((gg) => (
            <div className="card w-[350px] shadow-2xl my-5">
              <div className="card-header mx-3 mt-12 w-full">
                <a href="#" blur-shadow-image="true">
                  <img
                    className="rounded-lg object-cover w-[320px] h-[200px]"
                    src={gg.imageURL}
                    alt="card-image"
                  />
                </a>
              </div>
              <div className="card-body">
                <a href="#">
                  <h4 className="font-semibold">{gg.title}</h4>
                </a>
                <p className="opcacity-60 mb-4 line-clamp-2">
                  {gg.description}
                </p>
                <p className="text-2xl text-green-500 font-bold mb-3">
                  {gg.price}$
                </p>
                <div className="flex items-center justify-between ">
                  <Link
                    className="bg-blue-500 text-white px-4 py-2 rounded-xl mr-3"
                    to={`/about/${gg.id}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

export default Store;
