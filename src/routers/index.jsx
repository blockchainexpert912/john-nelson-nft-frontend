import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "../layout/base/Base";
import Home from "../pages/Home/Main";

function MyRoutes() {
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
}

export default MyRoutes;
