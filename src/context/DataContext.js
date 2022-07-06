import { intlFormat } from "date-fns";
import { createContext, useState, useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [info, setInfo] = useState([]); 
     
    const {data, fetchError, isLoading} = useAxiosFetch('https://api.p2pquake.net/v1/human-readable');
    
useEffect(() => {
    setInfo(data);
    
}, [data])

return (
    <DataContext.Provider value={{
        info, setInfo, fetchError, isLoading
    }}>
        {children}
    </DataContext.Provider>
)
}

export default DataContext;

