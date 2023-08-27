import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import ContactForm from "./components/ContactForm";
import Edit from "./components/Edit";
import ChartPage from "./pages/ChartPage";

const AllRoutes = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<ContactPage />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/chart-page" element={<ChartPage />} />
          <Route path="/edit/:id" element={<Edit />} />
          {/* <Route path="/map-page" element={<MapPage />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default AllRoutes;
