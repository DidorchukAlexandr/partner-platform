// import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles.js";
import ManagerPage from "./pages/ManagerPage/ManagerPage.jsx";
import UserPage from "./pages/UsersPage/UsersPage.jsx";
import BalancesPage from "./pages/BalancesPage/BalancesPage.jsx";
import SupportPage from "./pages/SupportPage/SupportPage.jsx";
import OfferPage from "./pages/OffersPage/OfferPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";

// const ManagerPage = lazy(() => import("./pages/ManagerPage/ManagerPage.jsx"));
// const UserPage = lazy(() => import("./pages/UsersPage/UsersPage.jsx"));
// const BalancesPage = lazy(() =>
//   import("./pages/BalancesPage/BalancesPage.jsx")
// );
// const SupportPage = lazy(() => import("./pages/SupportPage/SupportPage.jsx"));
// const OfferPage = lazy(() => import("./pages/OffersPage/OfferPage.jsx"));
// const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage.jsx"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ManagerPage />} />
        <Route path="/użytkownicy" element={<UserPage />} />
        <Route path="/oferuje" element={<OfferPage />} />
        <Route path="/profil" element={<ProfilePage />} />
        <Route path="/balansować" element={<BalancesPage />} />
        <Route path="/pomoc techniczna" element={<SupportPage />} />
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
