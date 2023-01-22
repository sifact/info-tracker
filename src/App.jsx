import React, { useState } from "react";
import { database, storage } from "./firebase/firebase.config";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect } from "react";
import { listAll } from "firebase/storage";
const db = getDatabase();

const App = () => {
    const [data, setData] = useState([]);
    const [imageList, setImageList] = useState([]);

    const dbRef = ref(db);
    const storageRef = ref(storage);
    console.log(data);
    useEffect(() => {
        listAll(storageRef).then((res) => {
            console.log(res);
        });
        const unsubscribe = onValue(dbRef, (snapshot) => {
            setData(snapshot.val());
        });

        return () => unsubscribe();
    }, []);

    return <div></div>;
};

export default App;
