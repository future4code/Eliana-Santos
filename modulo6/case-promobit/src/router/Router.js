import { Route, Router } from "react-router-dom";
import DetailsPage from "../pages/Details/DetailsPage";
import Home from "../pages/Home/Home";

export default Router = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<DetailsPage />} />
    </Router>
  );
};
