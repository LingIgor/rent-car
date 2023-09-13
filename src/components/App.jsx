import { Home } from "pages/Home";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Catalog } from "pages/Catalog";



export const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home/>} />
      <Route path="/catalog" element={<Catalog />} />
      {/* <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<Navigate to="/" />} /> */}
    </Route>
  </Routes>
  );
};
