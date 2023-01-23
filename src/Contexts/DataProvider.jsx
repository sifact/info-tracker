import { createContext } from "react";
import React, { useState, useEffect } from "react";
// import { database } from "../../firebase/firebase.config";
import { database } from "../firebase/firebase.config";
import { onValue, ref } from "firebase/database";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [persons, setPersons] = useState([]);

    // fetching from firebase
    const dbRef = ref(database);

    useEffect(() => {
        const unsubscribe = onValue(dbRef, (snapshot) => {
            setPersons(snapshot.val());
        });
        return () => unsubscribe();
    }, []);

    const data = { persons };
    return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default DataProvider;
