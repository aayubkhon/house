import PropertiProvider from "./properties";


const RootContext = ({ children }) => {
  return (
      <PropertiProvider>{children}</PropertiProvider>
  );
};

export default RootContext;
