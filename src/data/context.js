import React, { useState, createContext } from "react";

export const UserContext = createContext();

function UserContextProvider(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [roomNum, setRoomNum] = useState("");
  const [userId, setUserId] = useState("");
  const [successLogin, setSuccessLogin] = useState("");

  const LoginData = {
    username: email,
    password: password,
  };

  const GetToken = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(LoginData),
      redirect: "follow",
    };

    fetch("https://api.batborek.com/api/login2/", requestOptions)
      .then(async (response) => {
        const data = await response.json();
        setToken(data.token);
        setUserId(data.id);
        console.log("got token and id");
        setCurrentPage(2);
        GetUser()
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const GetUser = () => {
    var myHeaders = new Headers();
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://api.batborek.com/api/register/".concat(userId)+'/', requestOptions)
    .then(async (response) => {
        const data = await response.json();
        setName(data.name)
        console.log("got name");
        

      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const value = {
    GetUser,
    successLogin,
    setSuccessLogin,
    GetToken,
    LoginData,
    currentPage,
    setCurrentPage,
    email,
    setEmail,
    setPassword,
    setToken,
    setUserId,
    password,
    token,
    userId,
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}

export default UserContextProvider;
