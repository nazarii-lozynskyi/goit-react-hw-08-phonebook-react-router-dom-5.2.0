import { Switch } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "@mui/material";

import MyAppBar from "./components/MyAppBar";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import { authOperations, authSelectors } from "./redux/auth";

const HomePage = lazy(() => import("./pages/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
//const UploadView = lazy(() => import("./views/UploadView"));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <MyAppBar />

      <Container style={{ maxWidth: "1650px", paddingBottom: "40px" }}>
        <Switch>
          <Suspense fallback={<p>Загружаем...</p>}>
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>

            <PublicRoute exact path="/register" restricted>
              <RegisterPage />
            </PublicRoute>

            <PublicRoute exact path="/login" restricted redirectTo="/contacts">
              <LoginPage />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>

            {/*<Route>
              <NotFoundPage />
            </Route>*/}
          </Suspense>
        </Switch>
      </Container>
    </>
  );
}

export default App;
