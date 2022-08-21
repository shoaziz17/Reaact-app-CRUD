import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { ProductContext } from "../../utilities/productContext";

function Card({ game }) {
  const { cardGame, setCardGame } = useContext(ProductContext);

  function addCard() {
    const newArr = [...cardGame];
    newArr.push(game);
    setCardGame(newArr);
  }

  function deleteGame(gameId) {
    axios.delete(`http://localhost:3000/games/${gameId}`).then(() =>
      toast.error("Deleted!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    );
  }
  return (
    <>
      <div className="card w-[350px] shadow-2xl my-5">
        <div className="card-header mx-3 mt-12 w-full">
          <a href="#" blur-shadow-image="true">
            <img
              className="rounded-lg object-cover w-[320px] h-[200px]"
              src={game.imageURL}
              alt="card-image"
            />
          </a>
        </div>
        <div className="card-body">
          <a href="#">
            <h4 className="font-semibold">{game.title}</h4>
          </a>
          <p className="opcacity-60 mb-4 line-clamp-2">{game.description}</p>
          <p className="text-2xl text-green-500 font-bold mb-3">
            {game.price}$
          </p>
          <div className="flex items-center justify-between ">
            <Link
              className="bg-blue-500 text-white px-4 py-2 rounded-xl mr-3"
              to={`/about/${game.id}`}
            >
              Read More
            </Link>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-xl"
              onClick={() => deleteGame(game.id)}
            >
              Delete{" "}
            </button>
            <button
              onClick={addCard}
              className="bg-green-500 text-white px-4 py-2 rounded-xl"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
