import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todopage from "./pages/Todopage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todopage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
