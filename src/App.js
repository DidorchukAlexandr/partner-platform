// import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles.js";
// import PrivateRoute from "./modules/PrivateRoute/PrivateRoute.jsx";
// import PublicRoute from "./modules/PublicRoute/PublicRoute.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import ManagerPage from "./pages/ManagerPage/ManagerPage.jsx";
import UserPage from "./pages/UsersPage/UsersPage.jsx";
import BalancesPage from "./pages/BalancesPage/BalancesPage.jsx";
import SupportPage from "./pages/SupportPage/SupportPage.jsx";
import OfferPage from "./pages/OffersPage/OfferPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
//import LoginPage from "./pages/LoginPage/LoginPage.jsx";
// const RegisterPage = lazy(() =>
//   import("./pages/RegisterPage/RegisterPage.jsx")
// );
// const ManagerPage = lazy(() => import("./pages/ManagerPage/ManagerPage.jsx"));
// const UserPage = lazy(() => import("./pages/UsersPage/UsersPage.jsx"));
// const BalancesPage = lazy(() =>
//   import("./pages/BalancesPage/BalancesPage.jsx")
// );
// const SupportPage = lazy(() => import("./pages/SupportPage/SupportPage.jsx"));
// const OfferPage = lazy(() => import("./pages/OffersPage/OfferPage.jsx"));
// const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage.jsx"));

const App = () => {
  return (
    <>
      {/* <RegisterPage /> */}
      <Routes>
        <Route path="/partner-platform" element={<RegisterPage />} />

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

// import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
// import AuthLayout from "./modules/AuthLayout/AuthLayout";
// import UserRoutes from "./UserRoutes";
// import { Provider } from "react-redux";
// import { store, persistor } from "./redux/store";
// import RegisterPage from "./pages/RegisterPage/RegisterPage";

// const App = () => {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <AuthLayout>
//           <BrowserRouter>
//             <RegisterPage />
//             <UserRoutes />
//           </BrowserRouter>
//         </AuthLayout>
//       </PersistGate>
//     </Provider>
//   );
// };

// export default App;
