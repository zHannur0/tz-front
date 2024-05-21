import {useState} from "react";
import StartPage from "./components/StartPage";

function App() {
  const [start, setStart] = useState(true);



  return (
    <>
      {start ? (
        <StartPage/>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default App;
