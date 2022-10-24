import { createContext } from "react"

export const UserContext = createContext()



export const UserContextProvider = ({ children }) => {

    const value = {
        Name: "Atham",
        Lastname: "Akramov"
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}


