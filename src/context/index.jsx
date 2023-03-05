import { createContext } from "react";
import PropertiProvider from "./properties";

const Root = createContext();

const RootContext = ({ children }) => {
  return (
    <Root.Provider>
      <PropertiProvider>{children}</PropertiProvider>
    </Root.Provider>
  );
};

export default RootContext;
