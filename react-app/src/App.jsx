import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";
import User from "./components/User";
import EditForm from "./components/EditForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />}></Route>
          <Route path="/add-user" element={<Form />}></Route>
          <Route path="/edit-user/:id" element={<EditForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
