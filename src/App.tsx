import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <ChakraProvider theme={theme}>
    <Routes />
    <ToastContainer />
  </ChakraProvider>
);
export default App;
