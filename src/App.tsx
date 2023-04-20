// Package
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
export const Layout = lazy(() => import("./Components/Layout"));

// Pages
export const Map = lazy(() => import("./Pages/Map"));
export const Community = lazy(() => import("./Pages/Community"));
export const Donate = lazy(() => import("./Pages/Donate"));
export const Login = lazy(() => import("./Pages/Login"));

function App() {
  return (
    <Router>
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Map />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
