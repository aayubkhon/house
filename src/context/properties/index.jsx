import { createContext } from "react"


const PropertiesContext = createContext();

const PropertiProvider = ({children}) =>{
    return <PropertiesContext.Provider>{children}</PropertiesContext.Provider>
}

export default PropertiProvider