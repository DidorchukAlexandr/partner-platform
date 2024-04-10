import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles.js";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import ManagerPage from "./pages/ManagerPage/ManagerPage.jsx";
import UserPage from "./pages/UsersPage/UsersPage.jsx";
import BalancesPage from "./pages/BalancesPage/BalancesPage.jsx";
import SupportPage from "./pages/SupportPage/SupportPage.jsx";
import OfferPage from "./pages/OffersPage/OfferPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/menedżer" element={<ManagerPage />} />
        <Route path="/użytkownicy" element={<UserPage />} />
        <Route path="/oferuje" element={<OfferPage />} />
        <Route path="/profil" element={<ProfilePage />} />
        <Route path="/balansować" element={<BalancesPage />} />
        <Route path="/pomoc techniczna" element={<SupportPage />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
