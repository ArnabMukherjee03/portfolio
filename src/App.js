import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Portfolio from "./Component/Portfolio";
import Blog from "./Component/Blog";
import Navbar from "./Component/Nav";
import Notfound from "./Component/Notfound";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/blogs" Component={Blog}></Route>
        <Route path="/portfolio" Component={Portfolio}></Route>
        <Route path="*" Component={Notfound}></Route>
      </Routes>
    </>
  );
};

export default App;
