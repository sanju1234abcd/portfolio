import { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider ({children}){

const [dark, setDark] = useState(true)

const changeTheme = ()=>{
    setDark(((prev)=> !prev))
}

    
const value =  { dark,setDark,changeTheme };

return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppContextProvider;
