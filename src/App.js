import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Store from "./pages/Store";
import ProductProvider from "./utilities/productContext";
import AuthProvider from "./utilities/authContext";
import LoginRoute from "./pages/Login";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about/:gameId" element={<AboutPage />} />
            <Route path="/gameadd" element={<Create />} />
            <Route path="/update/:gameId" element={<Update />} />
            <Route path="/store" element={<Store />} />
            <Route path="/login" element={<LoginRoute />} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
