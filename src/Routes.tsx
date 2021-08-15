import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";

const Routes = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <ProtectedRoute path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default Routes;
