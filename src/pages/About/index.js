import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../shared_components/Layout";
import { HiOutlinePencilAlt } from "react-icons/hi";

function AboutPage() {
  let params = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/games/${params.gameId}`)
      .then(function (response) {
        setGame(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function ToAdd() {
    axios
      .get(`http://localhost:3000/games/${params.gameId}`, {})
      .then((response) => {
        setGame(response.data);
      });
  }

  return (
    <>
      <Layout>
        {game != null && (
          <div className="flex p-10 bg-blue-100 rounded-2xl justify-between items-center gap-10 mt-20">
            <div>
              <img src={game.imageURL} alt="img" />
            </div>
            <div className="w-[50%] bg-green-200 p-5 rounded-2xl space-y-4">
              <h1 className="font-bold text-2xl">{game.title}</h1>
              <h2 className="font-semibold">{game.developer}</h2>
              <p className="text-green-900">{game.description}</p>
              <h3 className="font-semibold text-blue-700">{game.price}$</h3>
              <Link to={`/update/${params.gameId}`}>
                <button
                  onClick={ToAdd}
                  className="flex items-center gap-3 bg-indigo-600 w-1/5 p-2 rounded-lg text-white active:scale-95 duration-200 cursor-pointer"
                >
                  Update
                  <HiOutlinePencilAlt className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        )} 
      </Layout>
      ;
    </>
  );
}

export default AboutPage;
