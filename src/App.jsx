import React from "react";
import LoadData from "./components/LoadData/LoadData";
import LoadImages from "./components/LoadImages/LoadImages";

import { storage } from "./firebase/firebase.config";
import { listAll, getDownloadURL, getMetadata } from "firebase/storage";

import { ref } from "firebase/storage";
import { useState } from "react";
import { useEffect } from "react";
import Home from "./Home/Home";

const App = () => {
    return (
        <div>
            {/* <img src={imageData} alt="" />
            <LoadData imageData={imageData} />

            <LoadImages imageData={imageData} /> */}
            <Home />
        </div>
    );
};

export default App;
