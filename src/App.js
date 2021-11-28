import { Route, Switch } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "@mui/material";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ContactsPage from "./pages/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage";

import MyAppBar from "./components/MyAppBar";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import { authOperations } from "./redux/auth";

function App() {
  const dispatch = useDispatch();

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
