import logo from "./logo.svg";

import { BrowserRouter, Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CreateBug from "./Pages/CreateBug";
import EditBug from "./Pages/EditBug";
import Navigation from "./Components/Navigation";
import ViewBugs from "./Pages/ViewBugs";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Navigation />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createbug" element={<CreateBug />} />
          <Route path="/editbug" element={<EditBug />} />
          <Route path="/viewbugs" element={<ViewBugs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
