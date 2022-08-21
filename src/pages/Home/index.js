import { useEffect, useState } from "react";
import Layout from "../../shared_components/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "../Card";
import axios from "axios";
function HomePage(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/games")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const games = data.map((game) => <Card game={game} />);
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-10">{games}</div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
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

export default HomePage;
