import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Page/Home";
import Error from "../src/Component/Error";
import SingleMovie from "../src/Page/SingleFilm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
