import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import "./index.scss";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="layout">
        <Navbar />
        <Main />
      </div>
    </ChakraProvider>
  );
}

export default App;
