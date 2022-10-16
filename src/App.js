import { Route, Routes } from "react-router-dom";
import GenerateQuote from "./components/GenerateQuote";
import SignIn from "./components/SignIn";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/generate" element={<GenerateQuote />}></Route>
      </Routes>
    </div>
  );
}

export default App;
