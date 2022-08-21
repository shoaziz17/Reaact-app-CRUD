import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const logOut = () => {
    setCurrentUser(null);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("banana"));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const myValue = { currentUser, setCurrentUser, logOut };

  return (
    <AuthContext.Provider value={myValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
