import "./App.css";
import AllPages from "./pages/AllPages";
import UserContextProvider from "./data/context";

function App() {
  return (
    <>
      <UserContextProvider>
        <AllPages />
      </UserContextProvider>
    </>
  );
}

export default App;
