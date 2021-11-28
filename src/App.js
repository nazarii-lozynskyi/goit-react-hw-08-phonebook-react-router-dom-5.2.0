import { Route, Switch } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Container } from "@mui/material";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ContactsPage from "./pages/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage";

import MyAppBar from "./components/MyAppBar";

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
          <Route exact path="/" component={HomePage} />

          <Route path="/register" component={RegisterPage} />

          <Route path="/login" component={LoginPage} />

          <Route path="/contacts" component={ContactsPage} />

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
