const { createContext, useState } = require("react");

export const UserContext = createContext({});
export function UserContextProvider({children}){

    const [color, setColorc] = useState('bg-red-500');
    const [done, setDone] = useState(0);
    const [not, setNot] = useState(1);
    const [dump, setDump] = useState(0);
    const [reviewWithAns, setReviewWithAns] = useState(0);
    const [reviewWithout, setReviewWithout] = useState(0);
    const [notVisited, setNotVisited] = useState(9);

    return (
        <UserContext.Provider value={{color, setColorc, done, setDone, not, setNot, dump, setDump, reviewWithAns, setReviewWithAns, reviewWithout, setReviewWithout, notVisited, setNotVisited}}>
            {children}
        </UserContext.Provider>
    )
}