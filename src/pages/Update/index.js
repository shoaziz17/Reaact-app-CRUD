import axios from "axios";
import React, { useState } from "react";
import Layout from "../../shared_components/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function Update() {
  let navigate = useNavigate();
  let params = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [developer, setDeveloper] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/games/${params.gameId}`)
      .then(function (response) {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setDeveloper(response.data.developer);
        setImage(response.data.imageURL);
        setPrice(response.data.price);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  function update() {
    axios
      .put(`http://localhost:3000/games/${params.gameId}`, {
        title: title,
        description: description,
        "release-date": date,
        imageURL: image,
        developer: developer,
        price: price,
      })
      .then((response) => {
        navigate(`/about/${params.gameId}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Layout>
      <h1 className="text-4xl font-bold p-5 text-center">Add new game</h1>
      <div className="form flex flex-col w-3/5 space-y-5">
        <input
          className="p-3 border border-green-500 rounded-md"
          placeholder="Enter game name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="game-name"
          type="text"
        />
        <textarea
          className="p-3 border border-green-500 rounded-md"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
          placeholder="Enter game description"
        ></textarea>

        <input
          className="p-3 border border-green-500 rounded-md"
          value={developer}
          onChange={(e) => setDeveloper(e.target.value)}
          placeholder="Enter developer name who created the game"
          id="game-name"
          type="text"
        />
        <input
          className="p-3 border border-green-500 rounded-md"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Enter release-date"
          id="game-name"
          type="date"
        />
        <input
          className="p-3 border border-green-500 rounded-md"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Add game image URL"
          id="game-name"
          type="text"
        />
        <img
          style={{ display: image.length > 0 ? "block" : "none" }}
          className="w-[400px] h-[300px]"
          src={image}
          alt=""
        />
        <input
          className="p-3 border border-green-500 rounded-md"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter the price"
          id="game-name"
          type="number"
        />
      </div>
      <button
        onClick={update}
        className="bg-green-500 text-white px-8 py-3
         rounded-lg duration-200 active:scale-95 my-5 "
        type="submit"
      >
        Update
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Layout>
  );
}

export default Update;
