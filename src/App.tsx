import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Docs from "./Pages/Docs";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <div className="bg-noexBlack text-noexWhite w-full overflow-hidden">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to={"/"} />} />
          <Route path="about" element={<About />} />
          <Route path="docs" element={<Docs />} />
          <Route path="*" element={<PageNotFound />} />6
        </Route>
      </Routes>
    </div>
  );
}

export default App;
